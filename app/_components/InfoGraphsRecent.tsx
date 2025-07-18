import React from 'react';
import { getInfoGraphsShort } from '../api/fetch';
import { Grid2 as Grid } from '@mui/material';
import CardActivity from './CardActivity';

export default async function InfoGraphsRecent() {
  const { data: infoGraphs } = await getInfoGraphsShort();
  return (
    <>
      {infoGraphs.content.map((infoGraph, index) => (
        <Grid key={index} size={{ xs: 12, md: 4 }}>
          <CardActivity {...infoGraph} />
        </Grid>
      ))}
    </>
  );
}
