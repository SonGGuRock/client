'use client';

import CraftComments from '@/app/widget/crafts/ui/craft-comments';
import CraftItemDetailContent from '@/app/widget/crafts/ui/craft-item-detail-content';
import CraftItemDetailHeader from '@/app/widget/crafts/ui/craft-item-detail-header';
import CraftItemDetailOthers from '@/app/widget/crafts/ui/craft-item-detail-others';

const CraftItemDetailPage = () => {
  return (
    <div className='relative pb-6'>
      <CraftItemDetailHeader />
      <CraftItemDetailContent />
      <CraftItemDetailOthers />
      <CraftComments classNames='py-6 px-4' />
    </div>
  );
};

export default CraftItemDetailPage;
