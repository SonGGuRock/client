// 영어 요일 이름을 유니온 타입으로 정의합니다.
export type EnglishDayName =
  | 'SUNDAY'
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY';

// 한국어 요일 이름을 유니온 타입으로 정의합니다.
type KoreanDayName = '일' | '월' | '화' | '수' | '목' | '금' | '토';

// 요일 이름의 타입을 정의합니다.
type DayName = {
  ko: KoreanDayName;
  en: EnglishDayName;
};

// dayNamesMap의 타입을 명시적으로 정의합니다.
const dayNamesMap: readonly DayName[] = [
  { ko: '일', en: 'SUNDAY' },
  { ko: '월', en: 'MONDAY' },
  { ko: '화', en: 'TUESDAY' },
  { ko: '수', en: 'WEDNESDAY' },
  { ko: '목', en: 'THURSDAY' },
  { ko: '금', en: 'FRIDAY' },
  { ko: '토', en: 'SATURDAY' },
] as const;

// formatToDayName 함수의 타입을 명시합니다.
const formatToDayName = (en: EnglishDayName): KoreanDayName => {
  const dayName = dayNamesMap.find((dayname) => dayname.en === en);

  return dayName!.ko;
};

export default formatToDayName;
