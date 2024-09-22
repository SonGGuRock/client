'use client';

import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import { CraftItemCreateBody } from '@/app/entities/crafts/types';
import useUpdate from '@/app/shared/api/useUpdate';
import Button from '@/app/shared/atoms/button/Button';
import Header from '@/app/shared/modules/header';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import CraftItemEditDetail from '@/app/widget/crafts/ui/craft-item-edit-detail';
import { useParams, useRouter } from 'next/navigation';

const CraftItemEditPage = () => {
  const router = useRouter();
  const params = useParams();
  const craftId = params['id'] as string;
  const itemId = params['itemId'] as string;
  const { update } = useUpdate<CraftItemCreateBody>({
    path: `/crafts/items/${itemId}`,
    revalidate: true,
    onSuccess: () => {
      router.push(`crafts/${craftId}/${itemId}`);
    },
  });

  const { form } = useFormFill(CraftItemMutateContext);

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
