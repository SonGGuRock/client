'use client';

import useToast from '@/app/shared/modules/toast/lib/useToast';
import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import ToastContent from '@/app/shared/modules/toast/ui/Toast';
import ArticleWriter from '@/app/shared/modules/ArticleWriter';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import { useRouter } from 'next/navigation';

export type ArticleCreateRequest = {
  title: string;
  content: string;
  is_representative_announcement: boolean;
};
const AnnouncementCreatePage = () => {
  const { toast, toggleToast } = useToast();
  const router = useRouter();
  const { mutate } = useMutateWithCrendetials('announcements');
  const { register, handleSubmit } = useForm<ArticleCreateRequest>();

  const onSubmit: SubmitHandler<ArticleCreateRequest> = (data) => {
    mutate(
      { method: 'POST', body: data },
      {
        onSuccess: () => {
          toggleToast({ text: '공지를 등록하였습니다' });
          router.push('/announcements');
        },
      }
    );
  };

  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back text='취소' />
        <Title>글 작성</Title>
        <Button size='small' type='submit' onClick={handleSubmit(onSubmit)}>
          저장
        </Button>
      </div>
      <ArticleWriter register={register} />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementCreatePage;
