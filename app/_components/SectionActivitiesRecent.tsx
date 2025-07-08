import { Button, Grid2 as Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ContainerSection from './ContainerSection';
import CardActivity from './CardActivity';

export default function SectionActivitiesRecent() {
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography textAlign='center' variant='h2'>
          รวมทุกกิจกรรมจากเครือข่ายครอบครัว
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography textAlign='center' variant='body1'>
          ทุกกิจกรรมคือโอกาสในการเรียนรู้ แบ่งปัน และร่วมสร้างสังคมใหม่
          เริ่มจากครอบครัวคุณเอง
        </Typography>
      </Grid>
      <Grid container size={12} spacing={2}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <CardActivity />
          </Grid>
        ))}
        <Grid container justifyContent='center' size={12}>
          <Button variant='contained' color='secondary' size='large'>
            ดูกิจกรรมทั้งหมด
          </Button>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
