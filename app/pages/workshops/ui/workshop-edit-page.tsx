'use client';

import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import Header from '@/app/shared/modules/header';
import {
  Workshop,
  WorkshopMutateRequest,
} from '@/app/widget/workshops/api/type';
import WorkshopForm from '@/app/widget/workshops/ui/workshop-form';
import WorkshopProfilePicture from '@/app/widget/workshops/ui/workshop-profile-picture';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const WorkshopEditPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/')[2];
  const { data: workshop } = useQueryWithCredentials<Workshop>(
    `workshops/${id}`
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutateWithCrendetials(`workshops/${id}`);

  const updateWorkshop = (body: WorkshopMutateRequest) =>
    mutate(
      {
        method: 'PUT',
        body,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey.some((key) => {
                return Array.isArray(key) && key.includes(`workshops/${id}`);
              });
            },
          });
          router.push(`/workshops/${id}`);
        },
      }
    );

  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>공방 정보 수정</Header.Title>
          </div>
        </div>
      </Header>
      {/* <WorkshopProfilePicture id='1' /> */}

      {workshop && (
        <WorkshopForm onSubmit={updateWorkshop} initialData={workshop} />
      )}
      {/* <div className='flex gap-6 flex-wrap pb-12'>
        <FormInput lableText='공방 이름' value='손꾸락 공방' />
        <FormInput lableText='전화번호' value='010-1234-5678' />
        <FormInput
          lableText='공방 등록일'
          disabled={true}
          value='2024. 02. 24'
        />
      </div> */}
    </div>
  );
};

export default WorkshopEditPage;
