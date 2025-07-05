import { Grid2 as Grid, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import CardActivity from './CardActivity';

export default function SectionActivitiesMark() {
  return (
    <Grid container>
      <Grid
        px='60px'
        py='36px'
        spacing={4}
        sx={{
          background: GRADIENT_BG,
        }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Typography
          variant='h5'
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
          เติบโต
          และสนับสนุนกันและกันอย่างแท้จริงทุกเรื่องราวล้วนเต็มไปด้วยพลังแห่งความรัก
          ความร่วมมือ และศรัทธาในคำว่าครอบครัว
        </Typography>
        <Grid container my='40px' spacing='40px'>
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </Grid>
      </Grid>
    </Grid>
  );
}
