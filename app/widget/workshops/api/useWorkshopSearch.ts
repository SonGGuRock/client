import { getAsync } from '@/app/shared/api/fetch';
import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';
import { Workshop } from './type';

const useWorkshopSearch = (params: Record<'name', any>) => {
  return useQuery<DataResponse<Workshop[]>, unknown, Workshop[]>({
    queryKey: ['workshops', params],
    queryFn: () => {
      return getAsync<DataResponse<Workshop[]>>('workshops', params);
    },
    select: (data: DataResponse<Workshop[]>) => data.data,
    enabled: false,
  });
};
export default useWorkshopSearch;
