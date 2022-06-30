import { Box, Typography } from "@mui/material";

import type { ReactNode } from "react";

const CardValues = ({
  title,
  children,
}: {
  title: ReactNode | string;
  children: ReactNode | string;
}) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {title}
    </Typography>
    <Typography variant="body1">{children}</Typography>
  </Box>
);

export default CardValues;
