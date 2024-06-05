import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import FormDatePicker from '@/app/shared/modules/form-date-input';
import ProfileDefault from '@/app/shared/modules/ProfileDefault';
import Header from '@/app/shared/modules/header';
import StudentCreateForm from '@/app/widget/students/ui/student-create-form';

const StudentCreatePage = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>수강생 등록</Header.Title>
        </div>
      </Header>

      {/* <div className='flex justify-center items-center w-full py-8'>
        <ProfileDefault />
      </div> */}

      <StudentCreateForm />
    </div>
  );
};

export default StudentCreatePage;
