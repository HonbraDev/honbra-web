import { Box, Card, Typography } from "@mui/material";

export interface TestimonialProps {
  text: string;
  author: {
    name: string;
    title: string;
  };
}

export const Testimonial = ({ text, author }: TestimonialProps) => (
  <Card sx={{ display: "flex", flexDirection: "column", gap: 1, p: 2 }}>
    <Typography variant="h5">
      {'"'}
      {text}
      {'"'}
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1">~ {author.name}</Typography>
      <Typography variant="subtitle2">, {author.title}</Typography>
    </Box>
  </Card>
);
