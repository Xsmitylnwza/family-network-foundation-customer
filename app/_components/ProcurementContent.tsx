import { Grid2 as Grid, Typography } from '@mui/material';
import { getProcurements } from '../api/fetch';
import Procurement from './Procurement';
import PaginationParams from './PaginationParams';

export default async function ProcurementContent() {
  const { data: procurements } = await getProcurements({ page: 0, size: 10 });
  if (!procurements.content.length) {
    return (
      <Grid
        container
        height={100}
        alignItems='center'
        justifyContent='center'
        size={12}
      >
        <Typography textAlign='center' variant='body1'>
          ยังไม่มีข้อมูล
        </Typography>
      </Grid>
    );
  }
  return (
    <>
      {procurements.content.map((procurement) => (
        <Procurement key={procurement.id} {...procurement} />
      ))}
      <Grid container justifyContent='center' size={12}>
        <PaginationParams
          totalPages={procurements.pagination.totalPages}
          scrollToId='procurement-section'
        />
      </Grid>
    </>
  );
}
