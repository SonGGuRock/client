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

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

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
