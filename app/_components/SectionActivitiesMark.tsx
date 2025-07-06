import { Grid2 as Grid, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import CardActivity from './CardActivity';

export default function SectionActivitiesMark() {
  return (
    <Grid
      sx={{
        background: GRADIENT_BG,
      }}
      minHeight={{ xs: 'max-content' }}
      maxHeight={{ md: '882px' }}
      container
    >
      <Grid
        px='60px'
        py='36px'
        maxWidth={'1440px'}
        mx='auto'
        spacing={4}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Typography
          variant='h2'
          textAlign='center'
          fontWeight={700}
          gutterBottom
        >
          “เรื่องราวดี ๆ <br />
          จากเครือข่ายครอบครัว”
        </Typography>
        <Typography variant='subtitle2' textAlign='center' gutterBottom>
          กิจกรรมจากทั่วประเทศที่เกิดขึ้นภายใต้ เครือข่ายครอบครัวไทย
          ไม่ใช่แค่การทำเพื่อสังคมแต่คือพื้นที่ที่ทุกครอบครัวได้มีโอกาสเรียนรู้
          เติบโต <br />
          และสนับสนุนกันและกันอย่างแท้จริงทุกเรื่องราวล้วนเต็มไปด้วยพลังแห่งความรัก
          ความร่วมมือ และศรัทธาในคำว่าครอบครัว
        </Typography>
        <Grid container spacing={4} my='40px'>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardActivity />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardActivity />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardActivity />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
