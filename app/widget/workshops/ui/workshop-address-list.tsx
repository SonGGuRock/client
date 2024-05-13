import { searchAddress } from '@/app/entities/workshops';
import Badge from '@/app/shared/atoms/badge';

export type Juso = {
  detBdNmList: string;
  engAddr: string;
  rn: string;
  emdNm: string;
  zipNo: string;
  roadAddrPart2: string;
  emdNo: string;
  sggNm: string;
  jibunAddr: string;
  siNm: string;
  roadAddrPart1: string;
  bdNm: string;
  admCd: string;
  udrtYn: string;
  lnbrMnnm: string;
  roadAddr: string;
  lnbrSlno: string;
  buldMnnm: string;
  bdKdcd: string;
  liNm: string;
  rnMgtSn: string;
  mtYn: string;
  bdMgtSn: string;
  buldSlno: string;
};

const WorkshopAddressList = async () => {
  const res: Juso[] = await searchAddress();

  return (
    <div>
      {res.map((addr) => (
        <div className='flex flex-wrap gap-2 py-4 border-b border-grey100 last:border-0'>
          <p className='flex gap-2 text-grey900 text-sm'>
            <Badge className='text-brown bg-beige'>도로명</Badge>
            {addr.roadAddr}
          </p>
          <p className='flex gap-2 text-grey500 text-sm'>
            <Badge className='text-grey500 bg-grey100'>지번</Badge>
            {addr.jibunAddr}
          </p>
        </div>
      ))}
    </div>
  );
};
export default WorkshopAddressList;
