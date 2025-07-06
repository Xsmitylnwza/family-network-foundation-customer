import React from 'react';
import BoxSlide from './BoxSlide';
import SectionPlayIntroduce from './SectionPlayIntroduce';
import { Grid2 as Grid } from '@mui/material';

export default function SectionWelcome() {
  return (
    <Grid my={1} container>
      <BoxSlide />
      <SectionPlayIntroduce />
    </Grid>
  );
}
