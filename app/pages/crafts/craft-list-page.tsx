'use client';

import {
  CraftQueryParams,
  CraftStatus,
  CraftSummaryList,
  CraftSummaryForStudentList,
} from '@/app/entities/crafts/types';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ButtonIndex } from '@/app/shared/atoms/button';
import DropDown from '@/app/shared/atoms/drop-down';
import { WorkStepType } from '@/app/shared/atoms/work-step-label';
import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';
import CraftFirstList from '@/app/widget/crafts/ui/craft-first-list';
import CraftsEditButton from '@/app/widget/crafts/ui/crafts-edit-button';
import CraftsListTab from '@/app/widget/crafts/ui/crafts-list-tab';
import CraftsStatusTab from '@/app/widget/crafts/ui/crafts-status-tab';
import StudentsFirstCraftList from '@/app/widget/crafts/ui/student-first-craft-list';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CraftListPage = () => {
  const [isCraftFirstview, setIsCraftFirstView] = useState<boolean>(true);
  const [craftQueries, setCraftQuries] = useState<CraftQueryParams>({
    work_step: 'all',
    status: 'ongoing',
    page: 0,
  });
  const { data: craftList } = useQueryWithCredentials<
    CraftSummaryList | CraftSummaryForStudentList
  >(`crafts${isCraftFirstview ? '' : '/students'}`, craftQueries);
  const router = useRouter();
  const handleCreateCraft = () => {
    router.push('/crafts/create');
  };

  const handleStatusAndWorkStep = (
    params: { status: CraftStatus } | { work_step: WorkStepType['en'] | 'all' }
  ) => {
    setCraftQuries((prev) => ({ ...prev, ...params }));
  };

  const handleViewTap = () => {
    setIsCraftFirstView((prev) => !prev);
  };
  if (!craftList) return <div>loading now</div>;

  const isCraftSummaryList = (
    craftList: CraftSummaryList | CraftSummaryForStudentList
  ): craftList is CraftSummaryList => {
    return (craftList as CraftSummaryList).total_page_count !== undefined;
  };
  return (
    <div className='pt-2'>
      <Header className='px-4 '>
        <Header.Title>작품</Header.Title>
        <ButtonIndex size='small' onClick={handleCreateCraft}>
          <ButtonIndex.AddIcon />새 등록
        </ButtonIndex>
      </Header>

      <CraftsListTab
        isCraftFirstView={isCraftFirstview}
        onSwap={handleViewTap}
      />
      <>
        {isCraftSummaryList(craftList) ? (
          <>
            <div className='w-full px-4'>
              <CraftsStatusTab
                onClick={handleStatusAndWorkStep}
                classNames='my-4 w-full'
                acitveWorkstep={craftQueries.work_step}
                activeStatus={craftQueries.status}
              />
              <div className='w-full flex justify-between'>
                {craftList.crafts.length !== 0 && (
                  <CraftsEditButton status={craftQueries.status} />
                )}
                <DropDown  >
                  <DropDown.Option value='최근등록순'>
                    최근등록순
                  </DropDown.Option>
                </DropDown>
              </div>
            </div>
            <CraftFirstList craftList={craftList.crafts} />
          </>
        ) : (
          <StudentsFirstCraftList studentList={craftList} />
        )}
      </>
      <BottomBar />
    </div>
  );
};

export default CraftListPage;
