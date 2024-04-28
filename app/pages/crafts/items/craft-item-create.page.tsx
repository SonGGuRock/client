'use client';

import { CraftItemCreateContext } from '@/app/_provider/craft-item-create-provider';
import Header from '@/app/shared/modules/header';
import Stepper from '@/app/shared/modules/stepper';
import CraftItemCreateDetail from '@/app/widget/crafts/ui/craft-item-create-detail';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { Step } from '@/app/shared/modules/stepper/lib/use-steps';
import StepStudent from '@/app/widget/reservations/ui/step-student';

export type CraftItem = {
  craft_id: number;
  reservation_id: number;
  student_id: number;
  student_name: string;
  craft_item_picture: string;
  craft_item_work_step: string;
  content: string;
};

const CraftItemCreatePage = () => {
  const { form } = useFormFill(CraftItemCreateContext);

  const CRAFT_STEPS: Step<CraftItem>[] = [
    {
      order: 0,
      isMount: true,
      data: 'student_name',
      component: <StepStudent context={CraftItemCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: 'craft_id',
      component: <CraftItemCreateDetail />,
    },
    {
      order: 2,
      isMount: false,
      data: 'work_type',
      component: <div>2</div>,
    },
  ];

  return (
    <div className='pt-3 '>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Title size='medium'>작품 등록</Header.Title>
          </div>
          <Header.Close />
        </div>
      </Header>

      {/* <input type='file' accept='image/*' capture></input> */}
      <Stepper steps={CRAFT_STEPS} form={form} />
    </div>
  );
};

export default CraftItemCreatePage;
