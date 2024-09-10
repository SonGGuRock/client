'use client';

import Header from '@/app/shared/modules/header';
import CraftItemCreateDetail from '@/app/widget/crafts/ui/craft-item-create-detail';

const CraftItemEditPage = () => {
  return (
    <div>
      <Header className='w-full absolute left-0 top-0 px-4'>
        <Header.Back />
      </Header>
      <CraftItemCreateDetail />
    </div>
  );
};

export default CraftItemEditPage;
