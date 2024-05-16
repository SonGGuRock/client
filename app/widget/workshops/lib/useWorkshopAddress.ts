import { WorkshopFormContext } from '@/app/_provider/workshop-create-provider';
import { useContext } from 'react';

const useWorkshopForm = () => {
  const context = useContext(WorkshopFormContext);

  if (!context) throw Error('공방 등록 콘텍스트에서 사용해주세요');
  return { workshopForm: context.form, setWorkshopForm: context.setForm };
};

export default useWorkshopForm;
