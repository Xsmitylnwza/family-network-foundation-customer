import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import mockCardImage from '@/public/showCaseMock/img-card.svg';
import { ArrowForward } from '@mui/icons-material';

export default function CardActivity() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box position='relative' width='100%' height='236px'>
        <Image
          src={mockCardImage.src}
          alt='activity'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'start',
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          หัวข้อกิจกรรมเด่น
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Giving young leaders an opportunity to grow and learn how to lead in
          their communities is critical to the long-term success of t
          curriculum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='text'
          endIcon={<ArrowForward />}
          color='secondary'
        >
          ดูรายละเอียดเพิ่มเติม
        </Button>
      </CardActions>
    </Card>
  );
}
