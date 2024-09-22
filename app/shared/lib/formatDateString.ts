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
  const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const year = koreanDate.getFullYear();
  const month = String(koreanDate.getMonth() + 1).padStart(2, '0');
  const day = String(koreanDate.getDate()).padStart(2, '0');
  const hours = String(koreanDate.getHours()).padStart(2, '0');
  const minutes = String(koreanDate.getMinutes()).padStart(2, '0');

  let formattedDate = '';
  if (fullOption.includeYear === true) {
    formattedDate += `${year}`;
  }
  if (fullOption.includeMonth)
    formattedDate += `${fullOption.includeYear ? '-' : ''}${month}`;
  if (fullOption.includeDay)
    formattedDate += `${
      fullOption.includeYear || fullOption.includeMonth ? '-' : ''
    }${day}`;
  if (fullOption.includeHours) formattedDate += ` ${hours}`;
  if (fullOption.includeMinutes)
    formattedDate += `${fullOption.includeHours ? ':' : ''}${minutes}`;

  return formattedDate.trim();
}
