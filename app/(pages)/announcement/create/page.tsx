'use client';

import useToast from '@/app/hooks/useToast';
import Back from '@/app/shared/ui/atoms/Back';
import Button from '@/app/shared/ui/atoms/button/Button';
import Title from '@/app/shared/ui/atoms/Title';
import Toast from '@/app/shared/ui/atoms/Toast';
import ArticleEditor from '@/app/shared/ui/modules/ArticleEditor';

const Page = () => {
  const { toast } = useToast();

  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back text='취소' />
        <Title title='글 작성' />
        <Button text='저장' size='small' onClick={() => {}} />
      </div>
      <ArticleEditor />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default Page;
