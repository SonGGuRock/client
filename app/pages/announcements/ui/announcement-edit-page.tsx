'use client';

import useToast from '@/app/shared/modules/toast/lib/useToast';
import Back from '@/app/shared/atoms/Back';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import ToastContent from '@/app/shared/modules/toast/ui/Toast';
import ArticleWriter from '@/app/shared/modules/ArticleWriter';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import {
  AnnouncementEditRequest,
  Announcment,
} from '@/app/widget/announcements/lib/type';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import { ArticleCreateRequest } from './announcement-create-page';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DataResponse } from '@/app/shared/api/type';

const AnnouncementEditPage = () => {
  const { toast, toggleToast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const editPath = usePathname();
  const path = editPath.split('/')[1] + '/' + editPath.split('/')[2];
  const announcement = queryClient.getQueryData<DataResponse<Announcment>>([
    `/${path}`,
    null,
  ]);

  const { register, handleSubmit } = useForm<ArticleCreateRequest>({
    defaultValues: announcement?.data,
  });

  const { mutate } = useMutateWithCrendetials<AnnouncementEditRequest>(
    `${path}`
  );

  const onSubmit: SubmitHandler<ArticleCreateRequest> = (data) => {
    mutate(
      { method: 'PUT', body: data },
      {
        onSuccess: () => {
          toggleToast({ text: '공지를 수정하였습니다' });
          router.push(`/${path}`);
          // queryClient.invalidateQueries({ queryKey: [`${path}`] });
        },
      }
    );
  };

  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back text='취소' />
        <Title>글 수정</Title>
        <Button size='small' onClick={handleSubmit(onSubmit)}>
          저장
        </Button>
      </div>
      {!!announcement && <ArticleWriter register={register} />}
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementEditPage;
