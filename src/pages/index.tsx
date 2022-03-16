import meta from "../data/indexMeta";
import projects from "../data/projects";
import Link from "next/link";

import { Layout, Section } from "../components/Layout";
import { Card, Box, Grid, Typography, Button, Tooltip } from "@mui/material";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout meta={meta}>
        <Section>
          <Typography variant="body1">
            High school student from Czechia, enthusiastic about web development
            with React and all things{" "}
            <Tooltip title="I'd like to interject for a moment...">
              <span>Linux</span>
            </Tooltip>
            .
          </Typography>
        </Section>
        <Section title="My miniapps">
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.route}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 2,
                    height: "100%",
                  }}
                >
                  <Typography variant="h4">{project.title}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Box sx={{ ml: "auto", mt: "auto" }}>
                    <Link href={project.route} passHref>
                      <Button variant="outlined" LinkComponent={"a"}>
                        Visit
                      </Button>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
