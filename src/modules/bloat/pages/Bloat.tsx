// I know the code is terrible, no need to remind me
import meta from "../meta";

import {
  Typography,
  Box,
  Slider,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Layout, Section } from "../../../components/Layout";
import { useState } from "react";

import type { NextPage } from "next";

const Bloat: NextPage = () => {
  const [speed, setSpeed] = useState(50);
  const [time, setTime] = useState(5);
  const [pspsps, setPspsps] = useState(false);

  const oneCharacterInMegabit = 0.0000076294;

  const mbps = pspsps ? "mbpspspspspsps" : "mbps";
  const seconds = pspsps ? "ssssssssssssseconds" : "seconds";

  const calculateCharacterCount = () => {
    return (speed / oneCharacterInMegabit) * time;
  };

  return (
    <Layout meta={{ ...meta, title: pspsps ? "Pspspspspsps" : meta.title }}>
      <Section>
        <Typography variant="body1">
          {pspsps ? (
            <>Meow</>
          ) : (
            <>
              Don&apos;t you just hate it when your website loads in under a
              second? Well I have the thing for you.
            </>
          )}
        </Typography>
      </Section>
      <Section>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
          }}
        >
          <Box></Box>
          <FormGroup row>
            <FormControlLabel
              sx={{
                width: "100%",
              }}
              labelPlacement="top"
              label={
                <Typography variant="h6" gutterBottom>
                  {pspsps ? (
                    <>Pspspsps per second</>
                  ) : (
                    <>Your connection speed</>
                  )}
                </Typography>
              }
              control={
                <Slider
                  value={speed}
                  onChange={(e, v) => setSpeed(v as number)}
                  min={1}
                  max={150}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} ${mbps}`}
                  marks={[
                    {
                      value: 1,
                      label: `1 ${mbps}`,
                    },
                    {
                      value: 50,
                      label: `50 ${mbps}`,
                    },
                    {
                      value: 100,
                      label: `100 ${mbps}`,
                    },
                    {
                      value: 150,
                      label: `150 ${mbps}`,
                    },
                  ]}
                />
              }
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              sx={{ width: "100%" }}
              labelPlacement="top"
              label={
                <Typography variant="h6" gutterBottom>
                  {pspsps ? (
                    <>Seconds per pspspsps</>
                  ) : (
                    <>Your desired loading time</>
                  )}
                </Typography>
              }
              control={
                <Slider
                  value={time}
                  onChange={(e, v) => setTime(v as number)}
                  min={0}
                  max={10}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} ${seconds}`}
                  marks={[
                    {
                      value: 0,
                      label: `0 ${seconds}`,
                    },
                    {
                      value: 5,
                      label: `5 ${seconds}`,
                    },
                    {
                      value: 10,
                      label: `10 ${seconds}`,
                    },
                  ]}
                />
              }
            />
          </FormGroup>
          <Box sx={{ display: "flex", flexDirection: "row-reverse", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => {
                const blob = new Blob([";".repeat(calculateCharacterCount())], {
                  type: "text/plain",
                });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "bloat.js";
                link.click();
                link.remove();
              }}
            >
              Generate my {pspsps ? <>Pspspsps</> : <>JavaScript</>}!
            </Button>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={pspsps}
                    onChange={(e) => setPspsps(e.target.checked)}
                  />
                }
                label="Pspspsps"
                labelPlacement="start"
              />
            </FormGroup>
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default Bloat;
