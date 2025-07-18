import ShowAllContent from '@/app/_components/AcivitiesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities | Family Network Foundation',
  description: 'Activities and events from Family Network Foundation',
};

interface Props {
  searchParams: {
    page?: string;
    size?: string;
  };
}

export default function ActivitiesPage({ searchParams }: Props) {
  return <ShowAllContent type='activity' searchParams={searchParams} />;
}
