'use client';

import { Todo, TodoContent } from '@/app/lib-temp/definition';
import CheckBox from '../../shared/atoms/CheckBox';
import useUpdate from '@/app/shared/api/useUpdate';
import TodoAuthor from './ui/todo-author';

const TodoItem = (todo: Todo) => {
  const { id, content, is_completed } = todo;
  const { update, isPending, variables, isIdle, isSuccess } =
    useUpdate<TodoContent>({
      path: `todos/${id}`,
      revalidate: true,
      revalidatePath: 'todos',
    });

  const handleCheck = () => {
    update({
      content,
      is_completed: !is_completed,
    });
  };

  return (
    <li
      key={`${id}`}
      className='w-full bg-grey50 rounded-md px-3 py-4 flex items-center gap-4 cursor-pointer '
    >
      <CheckBox
        isReadOnly={isPending}
        isChecked={
          isPending || variables?.body?.is_completed !== is_completed
            ? variables?.body?.is_completed
            : is_completed
        }
        onCheck={handleCheck}
      />

      <label
        className={`w-full text-sm cursor-pointer flex items-center justify-between  ${
          is_completed && 'text-grey500'
        }`}
      >
        {isPending ? variables.body?.content : content}
        <TodoAuthor {...todo} />
      </label>
    </li>
  );
};

export default TodoItem;
