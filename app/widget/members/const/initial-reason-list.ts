const initialReasonList: WitdrawalReason[] = [
  {
    id: 1,
    reason: '수업 관리가 어려워요.',
    checked: false,
  },
  { id: 2, reason: '스케줄 관리가 불편해요.', checked: false },
  { id: 3, reason: '작품 업로드 방식이 불편해요.', checked: false },
  { id: 4, reason: '공방을 더 이상 운영하지 않아요.', checked: false },
  { id: 5, reason: '기타', checked: false },
];

export default initialReasonList;

export type WitdrawalReason = {
  id: number;
  reason: string;
  checked: boolean;
  detail?: string;
};
