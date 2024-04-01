import Image from 'next/image';

interface WorkStepIconProps {
  step: string;
}

const WorkStepIcon = ({ step }: WorkStepIconProps) => {
  return (
    <Image
      src={`/icon/workstep/ic-${step}-24px.svg`}
      alt={`${step} 아이콘`}
      width={24}
      height={24}
    />
  );
};

export default WorkStepIcon;
