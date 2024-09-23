import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { ChangeEvent, FormEvent, PropsWithChildren, useRef } from 'react';

interface TextareaProps extends ClassNamesProps, PropsWithChildren {
  onChange?: (content: string) => void;
  value?: string;
  placeholder?: string;
  readonly?: boolean;
}

const Textarea = ({
  onChange,
  value,
  placeholder,
  classNames,
  readonly = false,
}: TextareaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e.target.value);
  };
  return (
    <textarea
      value={value}
      readOnly={readonly}
      onChange={handleChange}
      placeholder={placeholder}
      className={`text-base placeholder::text-grey400 ${classNames} ${
        readonly && 'cursor-default'
      }`}
    />
  );
};

export default Textarea;
