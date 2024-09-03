import useSteps, { Step } from '@/app/shared/modules/stepper/lib/use-steps';
import Button from '../atoms/button/Button';
import { useRouter } from 'next/navigation';
import Back from '../atoms/Back';
import { CraftItem, Reservation } from '@/app/lib-temp/definition';
import { ReservationCreateBody } from '@/app/entities/reservations/types';
import useCreate from '../api/useCreate';
import useFormFill from './stepper/lib/use-form-fill';
import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';

interface StepperProps<T extends ReservationCreateBody | CraftItem> {
  steps: Step<T>[];
  // form: Partial<T>;
}
const END_OF_STEP = 2;
const START_OF_STEP = 0;

const Stepper = ({
  steps: stepsObj,
  // form,
}: StepperProps<ReservationCreateBody | CraftItem>) => {
  const { steps, handleNext, handlePrev } = useSteps(stepsObj);
const {form} = useFormFill(ReservationCreateContext)
  const { post } = useCreate<ReservationCreateBody>({
    path: `reservations`,
    revalidate: false,
  });

  const nowStep = (steps.find((step) => step.isMount === true)?.order ?? 0) + 1;
  const router = useRouter();
  const handleCreate = () => {
    post(form as ReservationCreateBody)
    router.push('/reservations/create/success');
  };
  return (
    <div className='pt-6 pb-2 px-4 '>
      <div className='flex gap-2 items-center '>
        {nowStep !== 1 && <Back classNames='h-fit' onClick={handlePrev} />}
        <p className='text-grey400 text-sm py-2'>
          <span className='text-grey800 text-sm'>{nowStep}</span> /
          {END_OF_STEP + 1}
        </p>
      </div>
      <div className='min-h-[560px] relative'>
        {steps.filter((step) => step.isMount)[0].component}
        <div className='w-full px-4 fixed left-0 bottom-8'>
          {steps.map(
            (step, idx) =>
              step.isMount && (
                <Button
                  key={idx}
                  style='primary'
                  className='w-full'
                  size='large'
                  // disabled={}
                  onClick={
                    step.order === END_OF_STEP ? handleCreate : handleNext
                  }
                >
                  {step.order === END_OF_STEP ? '등록' : '다음'}
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
