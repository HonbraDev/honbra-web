import { Link } from "../components/Link";
import { Layout, Section } from "../components/Layout";
import { Box, Typography, Button } from "@mui/material";

import type { NextPage, GetServerSideProps } from "next";

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Layout
        meta={{
          title: `Error${statusCode ? ` ${statusCode}` : ""}`,
          route: "",
        }}
      >
        <Section>
          <Typography variant="body1">
            {statusCode
              ? statusCode === 404
                ? "The requested page could not be found. It may have been removed or renamed."
                : `An unexpected error occurred with the code ${statusCode}`
              : "An error has occured."}
          </Typography>
          {statusCode === 404 && (
            <Box mt={2}>
              <Link href="/">
                <Button variant="outlined">Go home</Button>
              </Link>
            </Box>
          )}
        </Section>
      </Layout>
    </>
  );
};

export default Error;

export interface Props {
  statusCode?: number;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const statusCode = res ? res.statusCode : 404;
  return { props: { statusCode } };
};
