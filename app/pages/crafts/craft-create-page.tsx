'use client';

import Header from '@/app/shared/modules/header';
import Stepper from '@/app/shared/modules/stepper';
import { Step } from '@/app/shared/modules/stepper/lib/use-steps';
import StepStudent from '@/app/widget/reservations/ui/step-student';
import type { CraftCreateBody } from '@/app/entities/crafts/types';
import { useRouter } from 'next/navigation';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import useCreate from '@/app/shared/api/useCreate';
import CraftCreateDetail from '@/app/widget/crafts/ui/craft-create-detail';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';

const CraftCreatePage = () => {
  const router = useRouter();
  const { form } = useFormFill(CraftCreateContext);
  const { post } = useCreate<CraftCreateBody>({
    path: `crafts`,
    revalidate: false,
    // onSuccess: (data) => {
    //   router.push(`/craft/create/success`);
    // },
  });

  const handleCreate = () => {
    post(form as CraftCreateBody);
  };

  const CRAFT_STEPS: Step<CraftCreateBody>[] = [
    {
      order: 0,
      isMount: true,
      data: 'student_id',
      component: <StepStudent context={CraftCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: 'name',
      component: <CraftCreateDetail />,
    },
    // {
    //   order: 2,
    //   isMount: false,
    //   data: 'name',
    //   component: <CraftItemCreateDetail />,
    // },
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
      <Stepper steps={CRAFT_STEPS} onCreate={handleCreate} />
    </div>
  );
};

export default CraftCreatePage;
