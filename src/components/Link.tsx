import NextLink from "next/link";

import { Link as MuiLink } from "@mui/material";

import type { LinkProps } from "@mui/material/Link";

export const Link = ({ href, ...props }: LinkProps & { href: string }) => (
  <NextLink href={href}>
    <MuiLink {...props} />
  </NextLink>
);
