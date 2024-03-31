type TitleProps = {
  size?: 'medium' | 'large';
  title: string;
  subTitle?: string;
};

const Title = ({ size = 'medium', title, subTitle }: TitleProps) => {
  return (
    <h2
      className={`${size === 'medium' ? 'text-lg' : 'text-xl'} font-semibold`}
    >
      {subTitle && <p className='text-sm text-grey500'>{subTitle}</p>}
      {title}
    </h2>
  );
};

export default Title;
