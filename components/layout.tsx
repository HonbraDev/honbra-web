import Head from "next/head";

import { Container, Typography, useTheme, Breadcrumbs } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { Link } from "./link";

export const RouteBreadcrumb = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => (
  <Link
    href={link}
    underline="hover"
    color="inherit"
    sx={{ cursor: "pointer" }}
  >
    {title}
  </Link>
);

export const Layout = ({
  title,
  children,
  disableFlex,
}: {
  children: any;
  title: string;
  disableFlex?: boolean;
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container
        sx={{
          my: 8,
          ...(disableFlex
            ? {}
            : {
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }),
        }}
        maxWidth="md"
      >
        <Box>
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
          {/* TO-DO: Implement proper breadcrumbs */}
          {router.route !== "/" && (
            <Breadcrumbs aria-label="breadcrumb">
              <RouteBreadcrumb title="Honbra" link="/" />
              <RouteBreadcrumb title={title} link={router.route} />
            </Breadcrumbs>
          )}
        </Box>
        {children}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Link href="https://github.com/HonbraDev/honbra-web">
            <a
              href="https://github.com/HonbraDev/honbra-web"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "2rem",
                }}
              />
            </a>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export const Section = ({
  title,
  disableFlex,
  children,
}: {
  title?: string;
  disableFlex?: boolean;
  children: any;
}) => (
  <Box
    sx={{
      ...(disableFlex
        ? {}
        : {
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }),
    }}
  >
    {title && <Typography variant="h4">{title}</Typography>}
    {children}
  </Box>
);
