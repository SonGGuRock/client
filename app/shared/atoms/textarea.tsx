import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

interface TextareaProps extends ClassNamesProps {
  placeholder?: string;
}

const Textarea = ({ placeholder, classNames }: TextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`text-base placeholder::text-grey400 ${classNames}`}
    />
  );
};

export default Textarea;
