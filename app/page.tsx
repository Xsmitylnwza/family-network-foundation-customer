import { Grid2 as Grid } from '@mui/material';
import HeaderBar from './_components/HeaderBar';
import Navbar from './_components/Navbar';
import BoxSlide from './_components/BoxSlide';
import SectionPlayIntroduce from './_components/SectionPlayIntroduce';
import SectionTypeFamily from './_components/SectionTypeFamily';
import SectionObjective from './_components/SectionObjective';
import SectionHistory from './_components/SectionHistory';
import SectionActivitiesMark from './_components/SectionActivitiesMark';
import SectionAlive from './_components/SectionAlive';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <Grid container>
      <Grid size={12}>
        <HeaderBar />
        <Navbar />
        <BoxSlide />
        <SectionPlayIntroduce />
        <SectionTypeFamily />
        <SectionObjective />
        <SectionHistory />
        <SectionActivitiesMark />
        <SectionAlive />
        <Footer />
      </Grid>
    </Grid>
  );
}
