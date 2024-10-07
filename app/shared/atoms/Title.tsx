import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface TitleProps extends PropsWithChildren, ClassNamesProps {
  size?: 'small' | 'medium' | 'large';
  subTitle?: string;
}

const Title = ({
  size = 'medium',
  children,
  subTitle,
  classNames,
}: TitleProps) => {
  return (
    <h2
      className={`${
        size === 'small'
          ? 'text-base'
          : size === 'medium'
          ? 'text-lg'
          : 'text-xl'
      } font-semibold ${classNames}`}
    >
      {subTitle && <p className='text-sm text-grey500'>{subTitle}</p>}
      {children}
    </h2>
  );
};

export default Title;
