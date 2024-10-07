import { getAsync } from '@/app/shared/api/fetch';
import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';
import { Workshop } from './type';
import { useState } from 'react';

const useWorkshopSearch = (params: Record<'name', any>) => {
  const [queryKey, setQueryKey] = useState<['workshops', Record<'name', any>]>([
    'workshops',
    params,
  ]);

  const { data } = useQuery<DataResponse<Workshop[]>, unknown, Workshop[]>({
    queryKey,
    queryFn: () => {
      return getAsync<DataResponse<Workshop[]>>(
        'workshops',
        undefined,
        queryKey[1]
      );
    },
    select: (data: DataResponse<Workshop[]>) => data.data,
    enabled: queryKey[1].name !== '',
  });

  const handleRefetch = (newParams: Record<'name', any>) => {
    setQueryKey(['workshops', newParams]);
  };

  return { data, refetch: handleRefetch };
};
export default useWorkshopSearch;
