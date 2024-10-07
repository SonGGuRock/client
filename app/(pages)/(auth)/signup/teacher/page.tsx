'use client';

import SignupTeacherPage from '@/app/pages/signup/ui/signup-teacher-page';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense>
      <SignupTeacherPage />;
    </Suspense>
  );
};

export default Page;
