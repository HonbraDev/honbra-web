import Link from "next/link";

import { Layout, Section } from "../components/layout";
import { Card, Box, Grid, Typography, Button } from "@mui/material";

import type { NextPage, GetStaticProps } from "next";

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Layout title="Honbra">
        <Section>
          <Typography variant="body1">
            High school student from Czechia, enthusiastic about web development
            with React and all things Linux.
          </Typography>
        </Section>
        <Section title="My projects">
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.link}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 2,
                  }}
                >
                  <Typography variant="h4">{project.title}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Box sx={{ ml: "auto" }}>
                    <Link href={project.link}>
                      <a href={project.link}>
                        <Button variant="outlined">Visit</Button>
                      </a>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = [
    {
      title: "Cat API",
      description: "A simple API for fetching images of my cat",
      link: "/cat",
    },
    {
      title: "SafariPWD",
      description: "A Safari-like password generator",
      link: "/safaripwd",
    },
    {
      title: "Grades",
      description: "A simple grade calculator for my school",
      link: "/grades",
    },
  ];
  return {
    props: {
      projects,
    },
  };
};

export interface Props {
  projects: {
    title: string;
    description: string;
    link: string;
  }[];
}
