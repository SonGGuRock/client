import Title from '@/app/shared/atoms/Title';
import WorkTypeSelect from './work-type-select';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { WorkshopIds } from '../../workshops/types';

const StepWorkType = () => {
  const { data: workshopIds } = useQueryWithCredentials<WorkshopIds>(
    'workshops/settings/ids'
  );

  if (!workshopIds) return <div> loading now </div>;
  return (
    <div>
      <div className='pt-1 pb-4 '>
        <Title size='large'>진행할 작업을 선택해주세요</Title>
      </div>

      <WorkTypeSelect
        classNames='justify-center mt-8'
        workTypes={workshopIds.work_types}
      />
    </div>
  );
};

export default StepWorkType;
