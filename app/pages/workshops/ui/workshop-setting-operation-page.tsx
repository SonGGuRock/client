'use client';

import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import Header from '@/app/shared/modules/header';
import { WorkshopOperation } from '@/app/widget/workshops/api/type';
import OperationSettingClasstime from '@/app/widget/mypage/ui/operation-setting-classtime';
import OperationSettingWorkstep from '@/app/widget/mypage/ui/operation-setting-workstep';
import OperationSettingReservation from '@/app/widget/mypage/ui/operation-setting-reservation';
import OperationSettingCapacity from '@/app/widget/mypage/ui/operation-setting-capacity';
import OperationSettingThrow from '@/app/widget/mypage/ui/operation-setting-throw';
import useOperationSetting from '@/app/widget/mypage/lib/useOperationSetting';
import Loader from '@/app/shared/atoms/loader';

const WorkshopSettingOperationPage = () => {
  const { mutate } = useMutateWithCrendetials<WorkshopOperation>(
    'workshops/settings/operation'
  );

  const { operation } = useOperationSetting();
  if (!operation) {
    return <Loader />;
  }
  const handleUpdate = () => {
    mutate({
      method: 'PUT',
      body: operation,
    });
  };
  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>공방 운영 설정</Header.Title>
          </div>
          <Header.Button size='small' style='primary' onClick={handleUpdate}>
            수정
          </Header.Button>
        </div>
      </Header>

      <div>
        <OperationSettingThrow />
        <OperationSettingCapacity />
        <OperationSettingClasstime />
        <OperationSettingReservation />
        <OperationSettingWorkstep />
      </div>
    </div>
  );
};

export default WorkshopSettingOperationPage;
