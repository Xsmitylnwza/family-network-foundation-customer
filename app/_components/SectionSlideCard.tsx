import { getActivitiesHighlight } from '../api/fetch';
import AnimationSlideAutoCard from './AnimationSlideAutoCard';

export default async function SectionSlideCard() {
  const { data: activities } = await getActivitiesHighlight();

  return <AnimationSlideAutoCard items={activities} animationDuration={240} />;
}
