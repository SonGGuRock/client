import { usePathname } from 'next/navigation';

const useExportFromPath = ({ index }: { index: number }) => {
  const pathname = usePathname();
  return pathname.split('/')[index];
};

export default useExportFromPath;
