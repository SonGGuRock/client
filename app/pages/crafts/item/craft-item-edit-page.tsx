'use client';

import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import {
  CraftItemCreateBody,
  CraftItemDetail,
} from '@/app/entities/crafts/types';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import useUpdate from '@/app/shared/api/useUpdate';
import Button from '@/app/shared/atoms/button/Button';
import Header from '@/app/shared/modules/header';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import CraftItemEditDetail from '@/app/widget/crafts/ui/craft-item-edit-detail';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CraftItemEditPage = () => {
  // const params = useParams();
  // const craftId = params.id as string;
  const router = useRouter();
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${1}`
  );
  const { update } = useUpdate<CraftItemCreateBody>({
    path: `/crafts/items/${1}`,
    revalidate: true,
    onSuccess: () => {
      router.push('crafts/1/detail');
    },
  });

  const { form, fill: fillCraftItemCreateBody } = useFormFill(
    CraftItemMutateContext
  );

  useEffect(() => {
    fillCraftItemCreateBody({
      picture: craftDetail?.picture,
      content: craftDetail?.content,
    });
  }, [craftDetail]);

  if (!craftDetail) return <div>loading now</div>;
  const { comments, items, student, ...rest } = craftDetail;
  const handleUpdateSubmit = () => {
    update(form as CraftItemCreateBody);
  };
  return (
    <div className='px-4'>
      <div style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Header>
          <div className='flex gap-2 items-center mb-4'>
            <Header.Back />
            <Header.Title>게시글 수정</Header.Title>
          </div>
        </Header>
        <CraftItemEditDetail />
      </div>
      <Button
        style='primary'
        className='w-full'
        size='large'
        // disabled={}
        onClick={() => {}}
      >
        완료
      </Button>
    </div>
  );
};

export default CraftItemEditPage;
