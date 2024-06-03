import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';
import { Workshop } from './type';
import { getAsync } from '@/app/shared/api/fetch';

const useWorkshopRegistered = () => {
  return useQuery<DataResponse<Workshop[]>, unknown, Workshop[]>({
    queryKey: ['workshops', 'registered'],
    queryFn: () => getAsync('workshops/registered'),
    select: (data) => data.data,
  });
};

export default useWorkshopRegistered;
