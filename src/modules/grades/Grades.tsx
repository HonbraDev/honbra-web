import { Layout, Section } from "../../components/layout";
import { Card, Slider, Typography, Grid } from "@mui/material";
import { useState } from "react";

import type { NextPage } from "next";

const Grades: NextPage<Props> = () => {
  const [points, setPoints] = useState(75);

  const getLabel = (p: number) => {
    if (p >= 85 && p <= 100) return "Výborně";
    if (p >= 65 && p <= 84) return "Chalitebně";
    if (p >= 45 && p <= 64) return "Dobře";
    if (p >= 30 && p <= 44) return "Dostatečně";
    if (p >= 0 && p <= 29) return "Nedostatečně";
    return "";
  };

  return (
    <>
      <Layout title="Grades">
        <Section>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              maxWidth: 500,
              width: "100%",
              mx: "auto",
            }}
          >
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
        </Section>
      </Layout>
    </>
  );
};

export default Grades;

export interface Props { }
