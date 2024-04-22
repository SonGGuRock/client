import Title from '@/app/shared/atoms/Title';
import WorkTypeSelect from './work-type-select';

const StepWorkType = () => {
  return (
    <div>
      <div className='pt-1 pb-4 '>
        <Title size='large'>진행할 작업을 선택해주세요</Title>
      </div>

      <WorkTypeSelect classNames='justify-center mt-8' />
    </div>
  );
};

export default StepWorkType;
