import { useRouter } from 'next/navigation';

const goTo = (path: string) => {
  const router = useRouter();
  router.push(path);
};

export default goTo;
