import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';

interface CardCommeteeProps {
  name: string;
  position: string;
  image: string;
}

export default function CardCommetee({
  name,
  position,
  image,
}: CardCommeteeProps) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '510px',
      }}
    >
      <Box position='relative' width='100%' height='422px'>
        <Image
          src={image}
          alt='activity'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'start',
          }}
        />
      </Box>
      <CardContent>
        <Typography variant='subtitle1' component='div'>
          {name}
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
          {position}
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
