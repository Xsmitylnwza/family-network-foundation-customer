import HeadSection from '../_components/HeadSection';
import SectionArticle from '../_components/SectionArticle';
import SectionInfoGraphRecent from '../_components/SectionInfoGraphRecent';
import SectionMediaVideo from '../_components/SectionMediaVideo';
import SectionPhotoImage from '../_components/SectionPhotoImage';
import { HEAD_SECTION_MEDIA } from '../constants';

type SearchParams = {
  page?: string;
  size?: string;
};

export default function MediaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <HeadSection {...HEAD_SECTION_MEDIA} />
      <SectionPhotoImage />
      <SectionMediaVideo />
      <SectionInfoGraphRecent />
      <SectionArticle searchParams={searchParams} />
    </>
  );
}
