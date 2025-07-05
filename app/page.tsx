import BoxSlide from './_components/BoxSlide';
import SectionPlayIntroduce from './_components/SectionPlayIntroduce';
import SectionTypeFamily from './_components/SectionTypeFamily';
import SectionObjective from './_components/SectionObjective';
import SectionHistory from './_components/SectionHistory';
import SectionActivitiesMark from './_components/SectionActivitiesMark';
import SectionAlive from './_components/SectionAlive';
import SectionGame from './_components/SectionGame';

export default function Home() {
  return (
    <>
      <BoxSlide />
      <SectionPlayIntroduce />
      <SectionTypeFamily />
      <SectionGame />
      <SectionObjective />
      <SectionHistory />
      <SectionActivitiesMark />
      <SectionAlive />
    </>
  );
}
