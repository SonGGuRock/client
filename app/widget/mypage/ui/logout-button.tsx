'use client';

import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import SettingMenu from './setting-menu';

interface Props {
  className?: string;
}

const LogoutButton = ({ className }: Props) => {
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
    <SettingMenu.Button onClick={handleLogout} className={className}>
      로그아웃
    </SettingMenu.Button>
  );
};

export default LogoutButton;
