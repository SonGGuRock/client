'use client';

import useToast from '@/app/widget/toast/lib/useToast';
import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import Toast from '@/app/widget/toast/ui/toast';
import ArticleEditor from '@/app/shared/modules/ArticleEditor';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import {
  AnnouncementEditRequest,
  Announcment,
} from '@/app/widget/announcements/lib/type';
import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';

const AnnouncementEditPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const editPath = usePathname();
  const path = editPath.split('/')[1] + '/' + editPath.split('/')[2];
  const { data: announcement } = useQueryWithCredentials<Announcment>(
    `${path}`
  );

  const { mutate } = useMutateWithCrendetials<AnnouncementEditRequest>(
    `${path}`
  );

  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back text='취소' />
        <Title>글 수정</Title>
        <Button size='small' onClick={() => {}}>
          저장
        </Button>
      </div>
      <ArticleEditor title='12/31 쉽니다' content={announcement?.content} />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementEditPage;
