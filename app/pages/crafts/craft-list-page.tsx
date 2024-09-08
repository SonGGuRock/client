'use client';

import { ButtonIndex } from '@/app/shared/atoms/button';
import DropDown from '@/app/shared/atoms/drop-down';
import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';
import CraftsEditButton from '@/app/widget/crafts/ui/crafts-edit-button';
import CraftsList from '@/app/widget/crafts/ui/crafts-list';
import CraftsListTab from '@/app/widget/crafts/ui/crafts-list-tab';
import CraftsStatusTab from '@/app/widget/crafts/ui/crafts-status-tab';
import { useRouter } from 'next/navigation';

const CraftListPage = () => {
  const router = useRouter();
  const handleCreateCraft = () => {
    router.push('/crafts/create');
  };
  return (
    <div className='pt-2'>
      <Header className='px-4 '>
        <Header.Title>작품</Header.Title>
        <ButtonIndex size='small' onClick={handleCreateCraft}>
          <ButtonIndex.AddIcon />새 등록
        </ButtonIndex>
      </Header>

      <CraftsListTab />

      <div className='w-full px-4'>
        <CraftsStatusTab classNames='my-4 w-full' />
        <div className='w-full flex justify-between'>
          <CraftsEditButton />
          <DropDown>
            <DropDown.Option value='최근등록순'>최근등록순</DropDown.Option>
          </DropDown>
        </div>
      </div>
      <CraftsList />
      <BottomBar />
    </div>
  );
};

export default CraftListPage;
