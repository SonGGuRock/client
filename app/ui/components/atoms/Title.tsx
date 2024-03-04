type TitleProps = {
  title: string;
  subTitle?: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <h2 className='text-lg font-semibold mb-4'>
      {subTitle && <p className='text-sm text-grey500'>{subTitle}</p>}
      {title}
    </h2>
  );
};

export default Title;
