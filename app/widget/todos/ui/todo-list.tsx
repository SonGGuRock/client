import sliceList from '@/app/shared/lib/sliceList';
import { Todo } from '../lib/type';
import TodoItem from '../TodoItem';
import ExpandedList from '@/app/shared/modules/ExpandedList';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const { limited, rest } = sliceList(4, todos);
  return (
    <div>
      {todos.length !== 0 ? (
        <>
          <ul className='flex flex-wrap gap-2'>
            {limited.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
          {todos.length > 4 && (
            <ExpandedList>
              {rest.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </ExpandedList>
          )}
        </>
      ) : (
        <EmptyDataNotice>할 일이 없습니다</EmptyDataNotice>
      )}
    </div>
  );
};

export default TodoList;
