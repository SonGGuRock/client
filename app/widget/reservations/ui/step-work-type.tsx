import Title from '@/app/shared/ui/atoms/Title';
import WorkTypeSelect from './work-type-select';

const StepWorkType = () => {
  return (
    <div>
      <div className='pt-6 pb-4 px-4 '>
        <p className='pb-4 text-grey400 text-sm'>
          <span className='text-grey800 text-sm'>3</span> /3
        </p>
        <Title size='large'>진행할 작업을 선택해주세요</Title>
      </div>

      <WorkTypeSelect classNames='justify-center mt-8' />
    </div>
  );
};

export default StepWorkType;
