import Image from 'next/image';
import mockCardImage from '@/public/showCaseMock/img-card.svg';
import { Box } from '@mui/material';

export default function AliveLogo() {
  return (
    <Box position='relative' minWidth='120px' minHeight='120px'>
      <Image
        src={mockCardImage.src}
        alt='alive'
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
