'use client';

import { PropsWithChildren, createContext, useState, useEffect } from 'react';
import { WorkshopOperation } from '../widget/workshops/api/type';
import { useQueryWithCredentials } from '../shared/api/fetch-with-credentials';

export type OperationSet = {
  operation: WorkshopOperation | null;
  set: (updatedField: Partial<WorkshopOperation>) => void;
};

export const OperationSetContext = createContext<OperationSet>({
  operation: null,
  set: () => {},
});

const WorkshopOperationProvider = ({ children }: PropsWithChildren) => {
  const { data } = useQueryWithCredentials<WorkshopOperation | null>(
    `workshops/settings/operation`
  );

  const [clientOperation, setClientOperation] =
    useState<WorkshopOperation | null>(null);

  useEffect(() => {
    if (data) {
      setClientOperation(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(clientOperation);
  }, [clientOperation]);

  const set = (updatedField: Partial<WorkshopOperation>) => {
    setClientOperation((prev) => (prev ? { ...prev, ...updatedField } : null));
  };

  return (
    <OperationSetContext.Provider value={{ operation: clientOperation, set }}>
      {children}
    </OperationSetContext.Provider>
  );
};

export default WorkshopOperationProvider;
