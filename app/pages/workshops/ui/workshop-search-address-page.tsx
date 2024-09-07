import Header from '@/app/shared/modules/header';
import SearchAddress from '@/app/shared/modules/search-address/search-address';

const WorkshopSearchAddressPage = () => {
  return (
    <div className='px-4 pt-3'>
      <Header>
        <div className='flex gap-2 items-center'>
          <Header.Back />
          <Header.Title>주소 검색</Header.Title>
        </div>
      </Header>

      <SearchAddress />
    </div>
  );
};

export default WorkshopSearchAddressPage;
