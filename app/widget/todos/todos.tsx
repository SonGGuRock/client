'use client';

import Cookies from 'js-cookie';

import Image from 'next/image';
import TodoItem from './TodoItem';
import Title from '../../shared/atoms/Title';
import Button from '../../shared/atoms/button/Button';

import ModalContentWithInput from '../../shared/modules/modal/ui/ModalContentWithInput';
import Toast from '../toast/ui/toast';
import useToast from '@/app/widget/toast/lib/useToast';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import { useQueryClient } from '@tanstack/react-query';
import {
  TodoCreateBody,
  useQueryWithCredentials,
  useMutateWithCrendetials,
} from '@/app/shared/api/fetch-with-credentials';
import ExpandedList from '@/app/shared/modules/ExpandedList';
import sliceItems from '@/app/shared/lib/sliceItems';
import { Todo } from './lib/type';

export default function Todos() {
  const memberId = Cookies.get('MEMBERID');
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModal();
  const { toast, toggleToast } = useToast();
  const todos = useQueryWithCredentials<Todo[]>('todos');

  const { mutate, isPending, variables } =
    useMutateWithCrendetials<TodoCreateBody>('todos');

  const handleAddDone = (content: string) => {
    mutate(
      {
        method: 'POST',
        body: {
          content,
        },
      },
      {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
      }
    );
    toggleToast({ text: '할 일을 추가하였습니다' });
  };

  const slicedTodos = sliceItems(4, todos);
  const notCompletedTodos = todos?.filter((todo) => !todo.is_completed);

  const handleOpenModalAddTodo = () => {
    openModal(
      <ModalContentWithInput
        title='할 일 추가'
        placeholder='오늘의 할 일을 입력하세요'
        onDone={handleAddDone}
        onClose={closeModal}
      />
    );
  };

  return (
    <div className='mt-8 mb-4 relative px-4'>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold flex items-center gap-2 mb-4'>
          <Title>오늘의 할 일</Title>
          <span>
            <strong className='text-brown'>{notCompletedTodos?.length}</strong>/
            {todos?.length}
          </span>
        </div>
        <Button
          size='small'
          onClick={handleOpenModalAddTodo}
          icon={
            <Image
              src='/icon/ic_plus_white.svg'
              alt='추가 버튼'
              width={18}
              height={18}
            />
          }
        >
          할 일 추가
        </Button>
      </div>

      <ul className='flex flex-wrap gap-2'>
        {slicedTodos?.limited?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        {isPending && (
          <div className='opacity-50'>
            <TodoItem
              content={variables?.body?.content!}
              id={0}
              is_completed={false}
              author={{
                id: Number(memberId),
                profile_picture: '/img/teacher-charactar.png',
              }}
            />
          </div>
        )}
      </ul>
      {todos && todos.length > 4 && (
        <ExpandedList>
          {slicedTodos?.rest.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ExpandedList>
      )}
      <PortalModal />
      {toast && <Toast text={toast.text} />}
    </div>
  );
}
