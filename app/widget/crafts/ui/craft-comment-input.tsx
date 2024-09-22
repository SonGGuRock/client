import useCreate from '@/app/shared/api/useCreate';
import Button from '@/app/shared/atoms/button/Button';
import Input from '@/app/shared/atoms/Input';
import { ChangeEvent, useState } from 'react';

const CraftCommentInput = () => {
  const [content, setContent] = useState<string>();
  const { post } = useCreate({
    path: `/crafts/items/1/comments`,
    revalidate: true,
    revalidatePath: '/crafts/items/1',
    onSuccess: () => {
      setContent('');
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleCreateComment = () => {
    post({ content });
  };
  return (
    <div className='flex gap-2'>
      <Input
        placeholder='댓글을 입력해주세요'
        onChange={handleChange}
        value={content}
      />
      <Button
        size='medium'
        style='primary'
        className='min-w-fit max-h-10'
        onClick={handleCreateComment}
      >
        등록
      </Button>
    </div>
  );
};

export default CraftCommentInput;
