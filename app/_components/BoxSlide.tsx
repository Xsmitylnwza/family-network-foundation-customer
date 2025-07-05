import { Grid2 as Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GRADIENT_BG } from '../theme';

export default function BoxSlide() {
  return (
    <Grid container>
      <Grid
        my={1}
        px='25px'
        py='36px'
        height='534px'
        sx={{
          background: GRADIENT_BG,
        }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Grid>
          <Typography variant='h6'>
            “รวมพลังครอบครัว
            <br />
            สร้างสังคมอบอุ่นไปด้วยกัน”
          </Typography>
          <Typography variant='body2' mt={2}>
            มูลนิธิเครือข่ายครอบครัว
            มีบทบาทในการประสานและสร้างความตระหนักในการส่งเสริมสถาบันครอบครัวให้เกิดขึ้นทั้งในบุคคล
            ชุมชน และสังคม
            ด้วยการนำเสนอกระบวนการรวมกลุ่มเป็นเครือข่ายความร่วมมือ
            ช่วยเหลือเกื้อกูลกันและเรียกร้องต่อรองสิทธิอันพึงมีของครอบครัว
            พันธกิจที่สำคัญของเราคือ
            ส่งเสริมให้พ่อแม่ใช้โอกาสเป็นพ่อแม่ของตนอย่างมีคุณค่า
            เพื่อทำหน้าที่ยิ่งใหญ่ให้ประสบผลสำเร็จนั่นคือหน้าที่ของความเป็นพ่อแม่นั่นเอง
          </Typography>
        </Grid>
        <Grid display='flex' justifyContent='end' alignItems='center' size={12}>
          <IconButton color='secondary'>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton color='secondary'>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
