import { fetchTodos } from '../../lib/data';
import CheckListItem from '../components/modules/CheckListItem';

export default async function Todos() {
  const todos = await fetchTodos();

  return (
    <div className='my-6 relative'>
      <h2 className='text-lg font-semibold mb-4'>오늘의 할 일</h2>
      <button className='absolute top-0 right-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
        >
          <circle cx='14' cy='14' r='14' fill='#E3BC99' />
          <path
            d='M9 14C9.64 14 15.9333 14 19 14'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M14 9C14 9.64 14 15.9333 14 19'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <ul className='flex flex-wrap gap-2'>
        {todos?.map(({ id, text, isChecked }) => (
          <CheckListItem id={id} text={text} isChecked={isChecked} />
        ))}
      </ul>
    </div>
  );
}
