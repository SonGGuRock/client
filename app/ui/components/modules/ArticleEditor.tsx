import CheckBox from '../atoms/CheckBox';

type ArticleEditorProps = {
  title?: string;
  content?: string;
  is_representative_announcement?: boolean;
};

const ArticleEditor = ({
  title,
  content,
  is_representative_announcement = false,
}: ArticleEditorProps) => {
  return (
    <div className='mt-4'>
      <div className='border-b pb-4'>
        <input
          placeholder='제목을 입력하세요'
          className='text-base mb-1 w-full'
          value={title}
          autoFocus
          maxLength={20}
        />
        <p className='text-sm text-grey300'>※ 최대 20자까지 입력 가능합니다.</p>
      </div>
      <textarea
        placeholder='내용을 입력하세요'
        className='mt-8 w-full min-h-[320px]'
        value={content}
      />
      <div className='flex justify-end gap-2 items-center'>
        <CheckBox
          onCheck={() => {}}
          style='grey'
          isChecked={is_representative_announcement}
        />
        <label>대표 공지로 등록</label>
      </div>
    </div>
  );
};
export default ArticleEditor;
