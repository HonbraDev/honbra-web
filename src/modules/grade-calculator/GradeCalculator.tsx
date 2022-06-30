import { Card, Grid, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { getLabel } from "./utils";

const GradeCalculator = () => {
  const [points, setPoints] = useState(75);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        maxWidth: 500,
        width: "100%",
      }}
    >
      <Typography variant="h4">Kalkulačka známek</Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{points}%</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{getLabel(points)}</Typography>
        </Grid>
      </Grid>
      <Slider
        value={points}
        min={0}
        max={100}
        onChange={(_, nv) => setPoints(nv as number)}
      />
    </Card>
  );
};

export default GradeCalculator;
