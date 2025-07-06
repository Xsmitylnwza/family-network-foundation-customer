import { Grid2 as Grid, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import AnimationSlidePagination from './AnimationSlidePagination';
import Objective from './Objective';
import { OBJECTIVES } from '../const/constants';

export default function SectionObjective() {
  return (
    <Grid
      sx={{
        background: GRADIENT_BG,
      }}
      minHeight={{ xs: 'max-content' }}
      maxHeight={{ xs: '100vh', md: '882px' }}
      container
    >
      <Grid
        maxWidth={'1440px'}
        mx='auto'
        px='60px'
        py='36px'
        spacing={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        size={12}
      >
        <Typography
          variant='h2'
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
        <Grid
          display={{ xs: 'none', md: 'flex' }}
          container
          size={12}
          spacing={12}
        >
          {OBJECTIVES.map((objective) => (
            <Grid size={4} key={objective.index}>
              <Objective {...objective} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
