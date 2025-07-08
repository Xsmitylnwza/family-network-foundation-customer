import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';

import ContainerSection from './ContainerSection';

export default function SectionHistory() {
  return (
    <ContainerSection>
      <Grid
        container
        size={{ xs: 12, md: 6 }}
        pr='40px'
        spacing={1}
        height={{ xs: '321px', md: '438px' }}
      >
        <Grid
          display='flex'
          justifyContent='end'
          alignItems='center'
          height='100%'
          size={6}
        >
          <Box
            position='relative'
            width={{ xs: '90px', md: '187px' }}
            height={{ xs: '126px', md: '241px' }}
          >
            <Image
              src='/history/history-1.svg'
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
            <Box
              position='relative'
              width={{ xs: '126px', md: '230px' }}
              height={{ xs: '126px', md: '230px' }}
            >
              <Image
                src='/history/history-2.svg'
                alt='history'
                style={{
                  objectFit: 'contain',
                }}
                fill
              />
            </Box>
            <Box
              width={{ xs: '102px', md: '194px' }}
              height={{ xs: '102px', md: '194px' }}
              position='relative'
            >
              <Image
                src='/history/history-3.svg'
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
      <Grid height='max-content' size={{ xs: 12, md: 6 }} container spacing={4}>
        <Typography variant='h2' fontWeight={700} gutterBottom>
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
    </ContainerSection>
  );
}
