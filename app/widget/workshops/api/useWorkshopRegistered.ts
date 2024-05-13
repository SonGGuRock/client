import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';
import { Workshop } from './type';
import { getAsync } from '@/app/shared/api/fetch';

const useWorkshopRegistered = () => {
  return useQuery<DataResponse<Workshop[]>, unknown, Workshop[]>({
    queryKey: ['workshops', 'registered'],
    queryFn: () => {
      return getAsync<DataResponse<Workshop[]>>('workshops/registered');
    },
    select: (data: DataResponse<Workshop[]>) => data.data,
  });
};

export default useWorkshopRegistered;
