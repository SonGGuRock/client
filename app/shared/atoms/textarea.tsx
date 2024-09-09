import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { ChangeEvent, FormEvent, PropsWithChildren, useRef } from 'react';

interface TextareaProps extends ClassNamesProps, PropsWithChildren {
  onChange: (content: string) => void;
  value?: string;
  placeholder?: string;
}

const Textarea = ({
  onChange,
  value,
  placeholder,
  classNames,
}: TextareaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`text-base placeholder::text-grey400 ${classNames}`}
    />
  );
};

export default Textarea;
