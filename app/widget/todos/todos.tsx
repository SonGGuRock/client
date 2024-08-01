'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { Todo } from './lib/type';
import TodoHeader from './ui/todo-header';
import TodoList from './ui/todo-list';

export default function Todos() {
  const { data: todos } = useQueryWithCredentials<Todo[]>('todos');

  if (!todos) {
    return <div>loading</div>;
  }
  const notCompletedTodos = todos.filter((todo) => !todo.is_completed);

  return (
    <div className='mt-8 mb-4 relative px-4'>
      <TodoHeader
        allCount={todos.length}
        restCount={notCompletedTodos.length}
      />
      <TodoList todos={todos} />
    </div>
  );
}
