import Image from 'next/image';
import { PropsWithChildren } from 'react';
import Button from '../../atoms/button/Button';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import Link from 'next/link';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative min-h-screen px-4 flex flex-col justify-center flex-wrap items-center'>
      {children}
    </div>
  );
};

const Notice = ({
  children,
  classNames,
}: PropsWithChildren & ClassNamesProps) => {
  return (
    <div
      className={`w-full flex flex-wrap justify-center items-center gap-4 ${classNames}`}
    >
      <Image
        src='/img/big-circle-check.png'
        alt='요청 완료 체크 이미지'
        width={60}
        height={60}
        className='block'
      />
      <span className='block w-full text-center text-grey900 text-lg font-bold'>
        {children}
      </span>
    </div>
  );
};

const Guide = ({
  children,
  classNames,
}: PropsWithChildren & ClassNamesProps) => {
  return <div className={`text-grey500 text-sm ${classNames}`}>{children}</div>;
};

type SubmissionField = {
  label: string;
  value: string;
};

interface InfomationProps {
  fields: SubmissionField[];
}
const Infomation = ({
  fields,
  classNames,
}: InfomationProps & ClassNamesProps) => {
  return (
    <div
      className={`w-full flex flex-wrap gap-4 py-6 px-3 border-t border-b border-grey100 ${classNames}`}
    >
      {fields.map((field) => (
        <div className='w-full flex justify-between'>
          <label className='text-grey700 text-sm'>{field.label}</label>
          <span className='text-sm text-grey900'>{field.value}</span>
        </div>
      ))}
    </div>
  );
};

interface SubmissionButtonProps extends ClassNamesProps {
  href: string;
}

const SubmissionButton = ({ href, classNames }: SubmissionButtonProps) => {
  return (
    <Link href={href} className={classNames}>
      <Button size='large'>확인</Button>
    </Link>
  );
};
const SubmissionSuccess = Object.assign(Layout, {
  Notice,
  Guide,
  Infomation,
  Button: SubmissionButton,
});

export default SubmissionSuccess;
