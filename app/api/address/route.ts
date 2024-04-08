let todosMock = [
  {
    id: 1,
    text: '속파기 도구 small 10개 사기',
    isChecked: false,
  },
  {
    id: 2,
    text: '토련 10덩이 해놓기',
    isChecked: false,
  },
];

export async function GET(request: Request) {
  return Response.json({ todosMock });
}
