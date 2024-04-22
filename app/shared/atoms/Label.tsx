type LabelProps = {
  text: string;
  subtext?: string;
};

const Label = ({ text, subtext }: LabelProps) => {
  return (
    <div className='bg-yellowBeige px-2 py-1 text-xs rounded-[32px] text-grey700 min-w-[64px] text-center'>
      <strong className='mr-1 text-grey900'>{text}</strong>
      {subtext}
    </div>
  );
};

export default Label;
