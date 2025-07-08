import SectionActivitiesRecent from '../_components/SectionActivitiesRecent';
import SectionEmployment from '../_components/SectionEmployment';
import SectionQuickNews from '../_components/SectionQuickNews';

export default function News() {
  return (
    <>
      <SectionQuickNews />
      <SectionActivitiesRecent />
      <SectionEmployment />
    </>
  );
}
