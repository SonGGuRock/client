import GoTo from '../components/atoms/GoTo';
import Photo from './photo';

export default function Gallery() {
  return (
    <div className='relative'>
      <h2 className='text-lg font-semibold mb-4'>갤러리</h2>
      <GoTo href='#' title='전체보기' />

      <ul className='flex gap-2'>
        <Photo />
        <Photo />
        <Photo />
      </ul>
    </div>
  );
}
