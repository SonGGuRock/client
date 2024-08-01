'use client';

import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import SettingMenu from './setting-menu';

const LogoutButton = () => {
  const { mutate } = useMutateWithCrendetials('members/logout');

  const handleLogout = () => {
    mutate(
      {
        method: 'POST',
      },
      {
        onSuccess: () => {
          window.location.href = '/signin';
        },
      }
    );
  };
  return (
    <SettingMenu.Button onClick={handleLogout}>로그아웃</SettingMenu.Button>
  );
};

export default LogoutButton;
