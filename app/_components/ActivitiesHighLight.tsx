import React from 'react';
import CardActivity from './CardActivity';
import { Grid2 as Grid } from '@mui/material';
import { getActivitiesHighlight } from '@/app/api/fetch';

export default async function ActivitiesHighLight() {
  const { data: activities } = await getActivitiesHighlight();

  return (
    <>
      {activities.slice(0, 3).map((activity, index) => (
        <Grid
          key={activity.id || index}
          height={{ xs: '496px', md: '637px' }}
          size={{ xs: 12, md: 4 }}
        >
          <CardActivity {...activity} />
        </Grid>
      ))}
    </>
  );
}
