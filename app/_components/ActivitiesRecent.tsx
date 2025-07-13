import React from 'react';
import { getActivitiesShort } from '../api/fetch';
import { Grid2 as Grid } from '@mui/material';
import CardActivity from './CardActivity';

export default async function ActivitiesRecent() {
  const { data: activities } = await getActivitiesShort();
  return (
    <>
      {activities.content.map((activity, index) => (
        <Grid key={index} size={{ xs: 12, md: 4 }}>
          <CardActivity {...activity} />
        </Grid>
      ))}
    </>
  );
}
