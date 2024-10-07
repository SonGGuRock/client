interface formatDateStringProps {
  fullDateString: string;
  options?: {
    includeYear?: boolean;
    includeMonth?: boolean;
    includeDay?: boolean;
    includeHours?: boolean;
    includeMinutes?: boolean;
  };
}

export default function formatDateString({
  fullDateString,
  options,
}: formatDateStringProps) {
  const defaultOptions = {
    includeYear: true,
    includeMonth: true,
    includeDay: true,
    includeHours: true,
    includeMinutes: true,
  };
  const fullOption = { ...defaultOptions, ...options };
  const date = new Date(fullDateString);

  // `Intl.DateTimeFormat`을 사용해 한국 시간대로 날짜 및 시간 변환
  const koreanDateParts = new Intl.DateTimeFormat('ko-KR', {
    year: fullOption.includeYear ? 'numeric' : undefined,
    month: fullOption.includeMonth ? '2-digit' : undefined,
    day: fullOption.includeDay ? '2-digit' : undefined,
    hour: fullOption.includeHours ? '2-digit' : undefined,
    minute: fullOption.includeMinutes ? '2-digit' : undefined,
    hour12: false,
    timeZone: 'Asia/Seoul',
  }).formatToParts(date);

  let formattedDate = koreanDateParts
    .map(({ type, value }) => {
      if (type === 'year' && fullOption.includeYear) return value;
      if (type === 'month' && fullOption.includeMonth)
        return `${fullOption.includeYear ? '-' : ''}${value}`;
      if (type === 'day' && fullOption.includeDay)
        return `${
          fullOption.includeYear || fullOption.includeMonth ? '-' : ''
        }${value}`;
      if (type === 'hour' && fullOption.includeHours) return ` ${value}`;
      if (type === 'minute' && fullOption.includeMinutes)
        return `${fullOption.includeHours ? ':' : ''}${value}`;
      return '';
    })
    .join('')
    .trim();

  return formattedDate;
}
