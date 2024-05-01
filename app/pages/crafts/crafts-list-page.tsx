import { ButtonIndex } from '@/app/shared/atoms/button';
import DropDown from '@/app/shared/atoms/drop-down';
import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';
import CraftThumbnail from '@/app/widget/crafts/ui/craft-thumbnail';
import CraftItem from '@/app/widget/crafts/ui/craft-item';
import CraftsEditButton from '@/app/widget/crafts/ui/crafts-edit-button';
import CraftsListTab from '@/app/widget/crafts/ui/crafts-list-tab';
import CraftsStatusTab from '@/app/widget/crafts/ui/crafts-status-tab';

const CraftsListPage = () => {
  return (
    <div className='pt-2'>
      <Header className='px-4 '>
        <Header.Title>작품</Header.Title>
        <ButtonIndex size='small'>
          <ButtonIndex.AddIcon />새 등록
        </ButtonIndex>
      </Header>

      <CraftsListTab />
      <div className='px-4'>
        <CraftsStatusTab classNames='my-4' />
      </div>

      <div className='px-4 flex justify-between'>
        <CraftsEditButton />
        <DropDown>
          <DropDown.Option value='최근등록순'>최근등록순</DropDown.Option>
        </DropDown>
      </div>
      <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
        {/* <CraftItem /> */}
        {/* <CraftItem />
        <CraftItem />
        <CraftItem />
        <CraftItem />
        <CraftItem />
        <CraftItem /> */}
      </div>
      <BottomBar />
    </div>
  );
};

export default CraftsListPage;
