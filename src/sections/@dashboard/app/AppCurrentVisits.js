import { merge } from 'lodash';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//

// ----------------------------------------------------------------------


export default function AppCurrentVisits() {
  const theme = useTheme();


  return (
    <Card>
      <CardHeader title="Current Visits" />
    </Card>
  );
}
