'use client';

import { PropsWithChildren } from 'react';
import IconCopy from '../../atoms/icons/icon-copy';
import CopyToClipboard from 'react-copy-to-clipboard';
import useToast from '../toast/lib/useToast';
import Toast from '../toast/ui/toast';

interface PhoneNumberBoxProps extends PropsWithChildren {
  className?: string;
  phoneNumber: string;
}

const PhoneNumberBox = ({ className, phoneNumber }: PhoneNumberBoxProps) => {
  const { toast, toggleToast } = useToast();

  const handleOnCopy = () => {
    toggleToast({ text: '복사되었습니다' });
  };

  return (
    <div className={`flex gap-2 text-sm ${className}`}>
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 19'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.9996 12.9817V15.0893C16.0004 15.2849 15.9602 15.4786 15.8817 15.6578C15.8031 15.8371 15.6879 15.998 15.5435 16.1303C15.399 16.2626 15.2285 16.3633 15.0428 16.4259C14.8571 16.4886 14.6603 16.5119 14.465 16.4943C12.299 16.2594 10.2183 15.5207 8.39023 14.3376C6.68945 13.2589 5.24748 11.8198 4.16674 10.1224C2.9771 8.28969 2.23677 6.20306 2.00571 4.03156C1.98812 3.83729 2.01126 3.6415 2.07364 3.45664C2.13603 3.27178 2.2363 3.10191 2.36807 2.95785C2.49984 2.81378 2.66022 2.69868 2.839 2.61986C3.01779 2.54105 3.21106 2.50025 3.40651 2.50007H5.51826C5.85987 2.49671 6.19105 2.61744 6.45007 2.83976C6.70909 3.06208 6.87828 3.37081 6.92609 3.70841C7.01522 4.38287 7.18052 5.04511 7.41883 5.68249C7.51354 5.93394 7.53403 6.20721 7.47789 6.46993C7.42175 6.73265 7.29132 6.9738 7.10207 7.16481L6.20809 8.05701C7.21016 9.81581 8.6693 11.2721 10.4316 12.2721L11.3256 11.3799C11.517 11.1911 11.7586 11.0609 12.0218 11.0049C12.2851 10.9488 12.5589 10.9693 12.8108 11.0638C13.4495 11.3016 14.113 11.4666 14.7888 11.5556C15.1308 11.6037 15.4431 11.7756 15.6663 12.0386C15.8895 12.3015 16.0081 12.6372 15.9996 12.9817Z'
          fill='currentColor'
        />
      </svg>
      <CopyToClipboard text={phoneNumber ?? ''} onCopy={handleOnCopy}>
        <span className='flex gap-2 cursor-pointer'>
          {phoneNumber} <IconCopy />
        </span>
      </CopyToClipboard>
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default PhoneNumberBox;
