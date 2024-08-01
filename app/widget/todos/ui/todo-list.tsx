import sliceList from '@/app/shared/lib/sliceList';
import { Todo } from '../lib/type';
import TodoItem from '../TodoItem';
import ExpandedList from '@/app/shared/modules/ExpandedList';

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const { limited, rest } = sliceList(4, todos);
  return (
    <div>
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
    </div>
  );
};

export default TodoList;
