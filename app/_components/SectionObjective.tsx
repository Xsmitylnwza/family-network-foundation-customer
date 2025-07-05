import { Grid2 as Grid, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import AnimationSlidePagination from './AnimationSlidePagination';

export default function SectionObjective() {
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
          “6 เป้าหมาย สร้างพลังให้ <br />
          ครอบครัวไทย”
        </Typography>
        <Typography variant='subtitle2' textAlign='center' gutterBottom>
          รวมวัตถุประสงค์หลักของมูลนิธิ <br />
          ที่มุ่งสร้างครอบครัวอบอุ่น เด็กมีคุณภาพ <br />
          และสังคมที่ไม่ทอดทิ้งกัน
        </Typography>
        <AnimationSlidePagination />
      </Grid>
    </Grid>
  );
}
