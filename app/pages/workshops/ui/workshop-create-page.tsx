import Header from '@/app/shared/modules/header';
import WorkshopCreateForm from '@/app/widget/workshops/ui/workshop-create-form';

const WorkshopCreatePage = () => {
  return (
    <div className='px-4 pt-2'>
      <Header>
        <div className='flex gap-2 items-center'>
          <Header.Back />
          <Header.Title>공방 등록</Header.Title>
        </div>
      </Header>
      <WorkshopCreateForm />
    </div>
  );
};

export default WorkshopCreatePage;
