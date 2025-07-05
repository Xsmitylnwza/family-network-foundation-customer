import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';
import history1 from '@/public/history/history-1.svg';
import history2 from '@/public/history/history-2.svg';
import history3 from '@/public/history/history-3.svg';

export default function SectionHistory() {
  return (
    <Grid container>
      <Grid
        px='60px'
        py='36px'
        spacing={4}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Grid container size={12} pr='40px' spacing={1} height='321px'>
          <Grid
            display='flex'
            justifyContent='end'
            alignItems='center'
            height='100%'
            size={6}
          >
            <Box position='relative' width='90px' height='126px'>
              <Image
                src={history1.src}
                alt='history'
                style={{
                  objectFit: 'contain',
                }}
                fill
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='start'
              height='100%'
              gap={1}
            >
              <Box position='relative' width='126px' height='126px'>
                <Image
                  src={history2.src}
                  alt='history'
                  style={{
                    objectFit: 'contain',
                  }}
                  fill
                />
              </Box>
              <Box width='102px' height='102px' position='relative'>
                <Image
                  src={history3.src}
                  alt='history'
                  style={{
                    objectFit: 'cover',
                  }}
                  fill
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='h5' fontWeight={700} gutterBottom>
          &quot;ยึดมั่นในจุดเริ่มต้น
          <br />
          ก้าวต่อเพื่อครอบครัวไทย
          <br />
          ในวันข้างหน้า&quot;
        </Typography>
        <Box display='flex' flexDirection='column' gap={2}>
          <Typography variant='subtitle1' gutterBottom>
            จากกลุ่มพ่อแม่เล็ก ๆ สู่พลังขับเคลื่อนเพื่อสังคมครอบครัวที่เข้มแข็ง
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            มูลนิธิเครือข่ายครอบครัว ก่อตั้งขึ้นใน พ.ศ.2542
            เกิดจากการรวมกลุ่มของพ่อแม่กลุ่มหนึ่งที่ร่วมกันผลักดันให้เกิดการปฏิรูปการศึกษาซึ่งใช้ชื่อว่า
            <strong>“ชมรมพ่อแม่”</strong>
            จากนั้นจึงพัฒนาเติบโตมาเป็นองค์กรสาธารณกุศลที่มีเป้าหมายชัดเจน คือ
            <strong>“เพื่อความเข้มแข็งของครอบครัวไทย”</strong>
            มีบทบาทในการประสานและสร้างความตระหนักในการส่งเสริมสถาบันครอบครัวให้เกิดขึ้นทั้งในบุคคล
            ชุมชน และสังคม
            ด้วยการนำเสนอกระบวนการรวมกลุ่มเป็นเครือข่ายความร่วมมือ
            ช่วยเหลือเกื้อกูลกันและเรียกร้องต่อรองสิทธิอันพึงมีของครอบครัว
            พันธกิจที่สำคัญของเราคือ
            ส่งเสริมให้พ่อแม่ใช้โอกาสเป็นพ่อแม่ของตนอย่างมีคุณค่า
            เพื่อทำหน้าที่ยิ่งใหญ่ให้ประสบผลสำเร็จนั่นคือหน้าที่ของความเป็นพ่อแม่นั่นเอง
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
