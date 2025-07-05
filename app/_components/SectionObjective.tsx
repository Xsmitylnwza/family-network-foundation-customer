import { Grid2 as Grid, Typography } from '@mui/material';
import Objective from './Objective';
import { GRADIENT_BG } from '../theme';

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
          variant='h6'
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
        <Grid container spacing={4}>
          <Objective
            index={1}
            title='สร้างครอบครัวอบอุ่น'
            description='สนับสนุนส่งเสริมบทบาทของพ่อแม่ และครอบครัวเข้ามามีส่วนร่วม ในการสร้างสรรค์กระบวนการเรียนรู้ ตลอดจนร่วมจัดการศึกษาให้แก่ลูกและเด็ก'
          />
          <Objective
            index={2}
            title='สร้างครอบครัวอบอุ่น'
            description='สนับสนุนส่งเสริมบทบาทของพ่อแม่ และครอบครัวเข้ามามีส่วนร่วม ในการสร้างสรรค์กระบวนการเรียนรู้ ตลอดจนร่วมจัดการศึกษาให้แก่ลูกและเด็ก'
          />
          <Objective
            index={3}
            title='สร้างครอบครัวอบอุ่น'
            description='สนับสนุนส่งเสริมบทบาทของพ่อแม่ และครอบครัวเข้ามามีส่วนร่วม ในการสร้างสรรค์กระบวนการเรียนรู้ ตลอดจนร่วมจัดการศึกษาให้แก่ลูกและเด็ก'
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
