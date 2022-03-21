import { merge } from "lodash";

import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";

export default function AppCurrentVisits() {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Current Visits" />
    </Card>
  );
}
