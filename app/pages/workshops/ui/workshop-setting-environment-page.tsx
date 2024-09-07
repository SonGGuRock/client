'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Header from '@/app/shared/modules/header';
import EnvironmentSettingNotification from '@/app/widget/mypage/ui/environment-setting-notification';
import { WorkshopEnvironment } from '@/app/widget/workshops/api/type';

const WorkshopSettingEnvironmentPage = () => {
  const { data: env } = useQueryWithCredentials<WorkshopEnvironment>(
    'workshops/settings/environment'
  );
  if (!env) {
    return <div>loading</div>;
  }

  return (
    <div className='pt-3'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>알림/할일 설정</Header.Title>
          </div>
        </div>
      </Header>
      <EnvironmentSettingNotification {...env} />
    </div>
  );
};

export default WorkshopSettingEnvironmentPage;
