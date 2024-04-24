import { Todo } from './definition';

export async function fetchTodos() {
  // noStore();
  try {
    const todos = await fetch('http://localhost:3000/api/todos', {
      next: { tags: ['ToDo'] },
      cache: 'no-store',
    });
    const { todosMock } = await todos.json();
    return todosMock as Todo[];
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw new Error('Failed to fetch todos.');
  }
}
