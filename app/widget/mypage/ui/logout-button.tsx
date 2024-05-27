'use client';

import useLogout from '../api/useLogout';
import SettingMenu from './setting-menu';

const LogoutButton = () => {
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };
  return (
    <SettingMenu.Button onClick={handleLogout}>로그아웃</SettingMenu.Button>
  );
};

export default LogoutButton;
