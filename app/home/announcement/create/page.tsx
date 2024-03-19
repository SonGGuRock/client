'use client';

import useToast from '@/app/hooks/useToast';
import Back from '@/app/ui/components/atoms/Back';
import Button from '@/app/ui/components/atoms/Button';
import Title from '@/app/ui/components/atoms/Title';
import Toast from '@/app/ui/components/atoms/Toast';
import ArticleEditor from '@/app/ui/components/modules/ArticleEditor';
import { createPortal } from 'react-dom';

const Page = () => {
  const { toast, toggleToast } = useToast();

  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back text='취소' />
        <Title title='글 작성' />
        <Button text='저장' size='small' onClick={() => {}} />
      </div>
      <ArticleEditor />
      {toast && createPortal(<Toast text={toast.text} />, document.body)}
    </div>
  );
};

export default Page;
