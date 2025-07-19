import ShowAllContent from '@/app/_components/AcivitiesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities | Family Network Foundation',
  description: 'Activities and events from Family Network Foundation',
};

type SearchParams = {
  page?: string;
  size?: string;
};

// Remove custom Props interface and use proper typing for Next.js 15.3.5
export default function ActivitiesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <ShowAllContent type='activity' searchParams={searchParams} />;
}
