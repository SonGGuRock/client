'use client';

import { useRouter } from 'next/navigation';
import useWithdrawal from '../api/useWithdrawal';
import SettingMenu from './setting-menu';
import deleteAuthToken from '@/app/shared/lib/deleteAuthToken';

const WithdrawalButton = () => {
  const router = useRouter();
  const { mutate } = useWithdrawal();

  const handleWitndrawl = () => {
    mutate(undefined, {
      onSuccess: () => {
        deleteAuthToken();
        router.push('/signin');
      },
    });
  };
  return (
    <SettingMenu.Button onClick={handleWitndrawl}>
      서비스 탈퇴
    </SettingMenu.Button>
  );
};

export default WithdrawalButton;
