import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface TextareaProps extends ClassNamesProps, PropsWithChildren {
  placeholder?: string;
  value: string;
}

const Textarea = ({ placeholder, classNames, value }: TextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`text-base placeholder::text-grey400 ${classNames}`}
      value={value}
    />
  );
};

export default Textarea;
