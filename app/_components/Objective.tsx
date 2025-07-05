import { Box, Typography } from '@mui/material';

interface Props {
  index: number;
  title: string;
  description: string;
}

function Objective({ index, title, description }: Props) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      px={2}
    >
      <Box
        bgcolor='secondary.main'
        sx={{
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          fontWeight: 600,
        }}
      >
        <Typography variant='h6' color='white'>
          {index}
        </Typography>
      </Box>
      <Box bgcolor='secondary.main' width='100%' height={2} />
      <Typography
        variant='subtitle1'
        fontWeight={700}
        mt={1}
        textAlign='center'
      >
        {title}
      </Typography>
      <Typography variant='subtitle2' textAlign='center'>
        {description}
      </Typography>
    </Box>
  );
}

export default Objective;
