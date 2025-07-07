import HeadSection from '../_components/HeadSection';
import SectionBanner from '../_components/SectionBanner';
import SectionCommetee from '../_components/SectionCommetee';
import SectionHistory from '../_components/SectionHistory';

export default function Home() {
  return (
    <>
      <HeadSection />
      <SectionHistory />
      <SectionCommetee />
      <SectionBanner />
    </>
  );
}
