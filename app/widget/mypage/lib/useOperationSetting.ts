import { OperationSetContext } from '@/app/_provider/workshop-operation-provider';
import { useContext } from 'react';

const useOperationSetting = () => {
  const operation = useContext(OperationSetContext);
  if (!operation) {
    throw Error('should be called in OperationSetContext');
  }

  return operation;
};

export default useOperationSetting;
