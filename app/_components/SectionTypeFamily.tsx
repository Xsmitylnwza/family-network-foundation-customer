import { Box, Grid2 as Grid } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import family1 from '@/public/family/family-1.svg';
import family2 from '@/public/family/family-2.svg';
import family3 from '@/public/family/family-3.svg';
import family4 from '@/public/family/family-4.svg';
import ContainerSection from './ContainerSection';

const topImages: StaticImageData[] = [family1, family2, family3, family4];

const sectionBlocks = [
  {
    title: 'เครือข่ายครอบครัวเลี้ยงเดี่ยว',
    description:
      'ส่งเสริมให้ครอบครัวที่มีพ่อหรือแม่ที่ต้องเลี้ยงดูลูกตามลำพัง ได้มีโอกาสรวมกลุ่มช่วยเหลือกันและกัน ทั้งทางด้านจิตใจและการดูแลเด็ก',
  },
  {
    title: 'เครือข่ายผู้ปกครองในโรงเรียน',
    description:
      'เพื่อส่งเสริมให้ครอบครัวและโรงเรียนได้มีส่วนร่วมในการพัฒนาเด็ก',
  },
  {
    title: 'เครือข่ายครอบครัวทั่วไป',
    description:
      'ครอบครัวทั่วไปที่สนใจในการเรียนรู้เพื่อสร้างครอบครัวให้เข้มแข็งและเคลื่อนไหวประเด็นประโยชน์สาธารณะเพื่อครอบครัว',
  },
  {
    title: 'ครอบครัวอาสา',
    description:
      'รวมกลุ่มครอบครัวที่สนใจในการเป็นอาสาสมัครช่วยเหลือสังคม โดยร่วมกันทำกิจกรรมสาธารณะประโยชน์ในรูปแบบต่างๆ ทั้งในชุมชน โรงเรียน และสร้างสรรค์สื่อ เครือข่ายครอบครัวอาสาเพื่อครอบครัว (Buddy Family) เป็นต้น',
  },
];

export default function SectionTypeFamily() {
  return (
    <ContainerSection>
      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }} container>
        <Grid size={12}>
          <Typography
            variant='h2'
            fontWeight={700}
            gutterBottom
            sx={{
              '& br': {
                display: { xs: 'block', md: 'none' },
              },
            }}
          >
            &quot;เครือข่ายครอบครัว
            <br />
            รวมพลังแตกต่าง
            <br />
            สร้างสังคมที่เข้าใจกัน&quot;
          </Typography>
        </Grid>
        {/* Section blocks */}
        <Grid
          container
          spacing={2}
          size={12}
          sx={{ maxWidth: { xs: 350, md: '100%' } }}
        >
          {sectionBlocks.map((block, idx) => (
            <Grid key={idx} size={12}>
              <Typography
                variant='subtitle2'
                color='secondary'
                fontWeight={700}
                gutterBottom
              >
                {block.title}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {block.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
        <Box display='flex' gap={1}>
          {topImages.map(({ src }, idx) => (
            <Box
              width={{ xs: 61, md: 164 }}
              height={{ xs: 213, md: 572 }}
              key={idx}
              position='relative'
            >
              <Image
                src={src}
                alt={`family${idx + 1}`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </ContainerSection>
  );
}
