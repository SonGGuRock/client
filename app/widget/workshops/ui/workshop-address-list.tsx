import Badge from '@/app/shared/atoms/badge';

interface WorkshopAddressListProps {
  address?: {
    roadAddr: string;
    jibunAddr: string;
  }[];
  currentPage: number;
  onClickAddress: (addr: string) => void;
  onClickPageNumber: (pageNum: number) => void;
}

const WorkshopAddressList = ({
  address,
  currentPage,
  onClickAddress,
  onClickPageNumber,
}: WorkshopAddressListProps) => {
  return (
    <div>
      {address && address.length !== 0 ? (
        address.map((addr, idx) => (
          <div
            key={idx}
            className='flex flex-wrap gap-2 py-4 border-b border-grey100 last:border-0'
            onClick={() => onClickAddress(addr.roadAddr)}
          >
            <p className='flex gap-2 text-grey900 text-sm'>
              <Badge className='text-brown bg-beige min-w-fit h-fit'>
                도로명
              </Badge>
              {addr.roadAddr}
            </p>
            <p className='flex gap-2 text-grey500 text-sm'>
              <Badge className='text-grey500 bg-grey100 min-w-fit h-fit'>
                지번
              </Badge>
              {addr.jibunAddr}
            </p>
          </div>
        ))
      ) : (
        <div className='w-full mt-10 text-center'>검색 결과가 없습니다.</div>
      )}
      {address && address.length !== 0 && (
        <div className='w-full mt-16 flex flex-center gap-2 justify-center'>
          {Array.from({ length: 5 }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => onClickPageNumber(idx + 1)}
              className={currentPage === idx + 1 ? 'font-bold' : ''}
            >
              {idx + 1}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default WorkshopAddressList;
