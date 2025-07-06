import Image from 'next/image';
import mockCardImage from '@/public/showCaseMock/img-card.svg';
import { Box, SxProps } from '@mui/material';

interface Props {
  sx?: SxProps;
}

export default function AliveLogo({ sx }: Props) {
  return (
    <Box position='relative' sx={sx}>
      <Image
        src={mockCardImage.src}
        alt='alive'
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
