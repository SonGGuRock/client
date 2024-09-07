import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';
import { WorkshopRegisterListResponse } from './type';
import { getAsync } from '@/app/shared/api/fetch';

const useWorkshopRegistered = () => {
  return useQuery<
    DataResponse<WorkshopRegisterListResponse>,
    unknown,
    WorkshopRegisterListResponse
  >({
    queryKey: ['workshops', 'teachers', 'status'],
    queryFn: () => getAsync('workshops/teachers/status'),
    select: (data) => data.data,
  });
};

export default useWorkshopRegistered;
