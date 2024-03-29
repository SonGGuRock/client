'use client';

import Image from 'next/image';
import TodoItem from './TodoItem';
import ExpandedList from '../shared/modules/ExpandedList';
import sliceItems from '@/app/utils/sliceItems';
import Title from '../shared/atoms/Title';
import Button from '../shared/atoms/button/Button';
import usePopup from '@/app/hooks/usePopup';
import BottomSheetWithInput from '../shared/modules/BottomSheetWithInput';
import Toast from '../shared/atoms/Toast';
import useToast from '@/app/hooks/useToast';

type Todo = {
  id: number;
  content: string;
  is_completed: boolean;
  author: {
    id: number;
    profile_picture: string;
  };
};

export default function Todos() {
  const { open: isInputMode, toggle: toggleInputMode } = usePopup();
  const { toast, toggleToast } = useToast();

  const todos: Todo[] = [
    {
      id: 1,
      content: '속파기 도구 small 10개 사기',
      is_completed: true,
      author: {
        id: 1,
        profile_picture: '/mock/user/img_user.png',
      },
    },
    {
      id: 2,
      content: '속파기 도구 small 10개 사기',
      is_completed: false,
      author: {
        id: 2,
        profile_picture: '/mock/user/img_user.png',
      },
    },
    {
      id: 3,
      content: '속파기 도구 small 10개 사기',
      is_completed: true,
      author: {
        id: 3,
        profile_picture: '/mock/user/img_user.png',
      },
    },
    {
      id: 4,
      content: '속파기 도구 small 10개 사기',
      is_completed: true,
      author: {
        id: 4,
        profile_picture: '/mock/user/img_user.png',
      },
    },
    {
      id: 5,
      content: '속파기 도구 small 10개 사기',
      is_completed: true,
      author: {
        id: 5,
        profile_picture: '/mock/user/img_user.png',
      },
    },
  ];

  const { limited, rest } = sliceItems(todos, 4);

  return (
    <div className='mt-8 mb-2 relative px-4'>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold flex items-center gap-2 mb-4'>
          <Title title='오늘의 할 일' />
          <span>
            <strong className='text-brown'>3</strong>/6
          </span>
        </div>
        <Button
          size='small'
          text='할 일 추가'
          onClick={toggleInputMode}
          icon={
            <Image
              src='/icon/ic_plus_white.svg'
              alt='추가 버튼'
              width={18}
              height={18}
            />
          }
        />
      </div>

      <ul className='flex flex-wrap gap-2'>
        {limited.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <ExpandedList>
        {rest.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ExpandedList>

      {isInputMode && (
        <BottomSheetWithInput
          title='할 일 추가'
          placeholder='오늘의 할 일을 입력하세요'
          onDone={() => {
            toggleToast({ text: '할 일을 추가하였습니다' });
          }}
          onClose={toggleInputMode}
        />
      )}
      {toast && <Toast text={toast.text} />}
    </div>
  );
}
