'use client';

import Comment from '@/app/shared/modules/comments';
import CraftItemDetailContent from '@/app/widget/crafts/ui/craft-item-detail-content';
import CraftItemDetailHeader from '@/app/widget/crafts/ui/craft-item-detail-header';
import CraftItemDetailOthers from '@/app/widget/crafts/ui/craft-item-detail-others';

const CraftItemDetailPage = () => {
  return (
    <div className='relative'>
      <CraftItemDetailHeader />
      <CraftItemDetailContent />
      <CraftItemDetailOthers />
      <Comment classNames='py-6 px-4' />
    </div>
  );
};

export default CraftItemDetailPage;
