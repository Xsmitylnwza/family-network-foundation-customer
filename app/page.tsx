import BoxSlide from './_components/BoxSlide';
import SectionPlayIntroduce from './_components/SectionPlayIntroduce';
import SectionTypeFamily from './_components/SectionTypeFamily';
import SectionObjective from './_components/SectionObjective';
import SectionHistory from './_components/SectionHistory';
import SectionActivitiesMark from './_components/SectionActivitiesMark';
import SectionAlive from './_components/SectionAlive';

export default function Home() {
  return (
    <>
      <BoxSlide />
      <SectionPlayIntroduce />
      <SectionTypeFamily />
      <SectionObjective />
      <SectionHistory />
      <SectionActivitiesMark />
      <SectionAlive />
    </>
  );
}
