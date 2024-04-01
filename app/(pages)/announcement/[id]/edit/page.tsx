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
        <Title title='글 수정' />
        <Button text='저장' size='small' onClick={() => {}} />
      </div>
      <ArticleEditor
        title='12/31 쉽니다'
        content=' 여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번
        블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히
        소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두 번째는 다양한
        환경에 대비할 수 있는 다용도 의류. 세 번째 아이템은 여행 중 긴급 상황에
        대비한 응급 키트입니다. 네 번째는 휴대용 충전기와 보조 배터리로, 언제
        어디서든 기기를 충전할 수 있게 해줍니다.'
      />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default Page;
