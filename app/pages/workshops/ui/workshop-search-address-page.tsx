import Header from '@/app/shared/ui/modules/header';
import SearchBorder from '@/app/shared/ui/modules/search-border';
import WorkshopAddressList from '@/app/widget/workshops/ui/workshop-address-list';

const WorkshopSearchAddressPage = () => {
  return (
    <div className='px-4 pt-3'>
      <Header>
        <div className='flex gap-2 items-center'>
          <Header.Back />
          <Header.Title>주소 검색</Header.Title>
        </div>
      </Header>

      <SearchBorder />
      <WorkshopAddressList />
    </div>
  );
};

export default WorkshopSearchAddressPage;
