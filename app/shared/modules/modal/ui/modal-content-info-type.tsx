import Button from '@/app/shared/atoms/button/Button';
import IconAlertCircle from '@/app/shared/atoms/icons/icon-alert-circle';

interface ModalContentInfoTypeProps {
  text: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onClickPrimary: () => void;
  onClickSecondary: () => void;
}

const ModalContentInfoType = ({
  text,
  onClickPrimary,
  onClickSecondary,
  primaryButtonText,
  secondaryButtonText,
}: ModalContentInfoTypeProps) => {
  return (
    <div className='py-4'>
      <div className='w-full flex flex-wrap justify-center gap-4 mb-10'>
        <IconAlertCircle />
        <p className='w-full text-lg font-bold text-grey900 text-center'>
          {text}
        </p>
      </div>
      <div className='w-full flex justify-center gap-2'>
        <Button size='large' style='secondary' onClick={onClickSecondary}>
          {secondaryButtonText}
        </Button>
        <Button size='large' style='primary' onClick={onClickPrimary}>
          {primaryButtonText}
        </Button>
      </div>
    </div>
  );
};

export default ModalContentInfoType;
