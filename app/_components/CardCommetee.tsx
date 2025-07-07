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

export default function CardCommetee() {
  return (
    <Card
      sx={{
        width: '100%',
        height: '510px',
      }}
    >
      <Box position='relative' width='100%' height='422px'>
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
        <Typography gutterBottom variant='h3' component='div'>
          ชื่อ
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
          ตำแหน่ง
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
