import { ButtonIndex } from '@/app/shared/atoms/button';
import Header from '@/app/shared/modules/header';
import CraftsEditList from '@/app/widget/crafts/ui/crafts-edit-list';

const CraftListEditPage = () => {
  return (
    <div className='pt-2  min-h-screen relative'>
      <Header className='px-4 '>
        <div className='flex gap-2 items-center'>
          <Header.Back />
          <Header.Title size='small'>작품 편집</Header.Title>
        </div>
        <ButtonIndex size='small'>완료</ButtonIndex>
      </Header>

      <CraftsEditList />
    </div>
  );
};

export default CraftListEditPage;
