'use client';

import Header from '@/app/shared/modules/header';
import Stepper from '@/app/shared/modules/stepper';
import { Step } from '@/app/shared/modules/stepper/lib/use-steps';
import StepStudent from '@/app/widget/reservations/ui/step-student';
import type {
  CraftCreateBodyAndTitle,
  CraftItemCreateBody,
} from '@/app/entities/crafts/types';
import { useRouter } from 'next/navigation';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import useCreate from '@/app/shared/api/useCreate';
import CraftCreateDetail from '@/app/widget/crafts/ui/craft-create-detail';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';
import CraftItemCreateDetail from '@/app/widget/crafts/ui/craft-item-create-detail';
import { CraftItemCreateContext } from '@/app/_provider/craft-item-create-provider';

const CraftCreatePage = () => {
  const router = useRouter();
  const { form } = useFormFill(CraftItemCreateContext);
  const { post: createCraftItem } = useCreate<CraftItemCreateBody>({
    path: `crafts/items`,
    revalidate: false,
    onSuccess: (data) => {
      router.push(`/crafts`);
    },
  });

  const handleCreate = () => {
    createCraftItem(form as CraftItemCreateBody);
  };

  const CRAFT_STEPS: Step<CraftCreateBodyAndTitle | CraftItemCreateBody>[] = [
    {
      order: 0,
      isMount: true,
      data: ['student_id'],
      component: <StepStudent context={CraftCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: ['name', 'title'],
      component: <CraftCreateDetail />,
    },
    {
      order: 2,
      isMount: false,
      data: [
        'picture',
        'work_step_id',
        'content',
        'reservation_id',
        'craft_status',
      ],
      component: <CraftItemCreateDetail />,
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

      <Stepper steps={CRAFT_STEPS} onCreate={handleCreate} />
    </div>
  );
};

export default CraftCreatePage;
