'use client';

import Header from '@/app/shared/modules/header';
import type { CraftItemCreateBody } from '@/app/entities/crafts/types';
import { useRouter, useSearchParams } from 'next/navigation';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import useCreate from '@/app/shared/api/useCreate';
import CraftItemCreateDetail from '@/app/widget/crafts/ui/craft-item-create-detail';
import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import Button from '@/app/shared/atoms/button/Button';

const CraftItmeCreatePage = () => {
  const router = useRouter();
  const craftName = useSearchParams().get('name');
  const { form } = useFormFill(CraftItemMutateContext);
  const { post: createCraftItem } = useCreate<CraftItemCreateBody>({
    path: `crafts/items`,
    revalidate: false,
    onSuccess: (data) => {
      router.push(`/crafts`);
    },
  });

  const handleCreate = () => {
    createCraftItem(form as CraftItemCreateBody);
  };

  return (
    <div>
      <div className='pt-3' style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Header className='px-4'>
          <div className='w-full flex gap-1 justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <Header.Back />
              <Header.Title size='medium'>
                {craftName && decodeURIComponent(craftName)}의 등록
              </Header.Title>
            </div>
            <Header.Close />
          </div>
        </Header>
        <div className='px-4'>
          <CraftItemCreateDetail />
        </div>
      </div>

      <div className='px-4'>
        <Button
          style='primary'
          className='w-full'
          size='large'
          onClick={handleCreate}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default CraftItmeCreatePage;
