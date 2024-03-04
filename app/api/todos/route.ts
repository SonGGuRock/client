import { Todo } from '@/app/lib/definition';

let todosMock = [
  {
    id: 1,
    text: '속파기 도구 small 10개 사기',
    isChecked: false,
  },
  {
    id: 2,
    text: '토련 10덩이 해놓기',
    isChecked: false,
  },
];

export async function GET(request: Request) {
  return Response.json({ todosMock });
}

export async function POST(request: Request) {
  const res = await request.json();
  const id = res.id;
  const updated: Todo[] = todosMock.map((todo) =>
    todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
  );

  todosMock = updated;
  return Response.json(updated);
}

// export async function POST(id: number) {
//   const updated: Todo[] = todosMock.map((todo) =>
//     todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
//   );

// todosMock = updated;
// return Response.json(updated);
// }
