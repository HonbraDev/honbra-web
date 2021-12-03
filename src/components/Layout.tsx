import Head from "next/head";
import socials from "../data/socials";

import {
  Container,
  Typography,
  Breadcrumbs,
  Tooltip,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "./Link";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, gap: 4 }}>
      {socials.map(({ icon: Icon, href, tooltip }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          <Tooltip title={tooltip || ""} placement="top">
            <IconButton size="large">
              <Icon />
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </Box>
  );
};

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
          {router.route !== "/" && (
            <Breadcrumbs>
              <RouteBreadcrumb title="Honbra" link="/" />
              <Box />
            </Breadcrumbs>
          )}
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
        </Box>
        {children}
        <Footer />
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
