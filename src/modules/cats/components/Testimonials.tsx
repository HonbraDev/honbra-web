import { Grid } from "@mui/material";
import { Testimonial } from "./Testimonial";

import type { TestimonialProps } from "./Testimonial";

const testimonials: TestimonialProps[] = [
  {
    text: "The site for all the pussies",
    author: {
      name: "Lucemans",
      title: "everything",
    },
  },
];

export const Testimonials = () => (
  <Grid container spacing={3}>
    {testimonials.map(({ text, author }) => (
      <Grid item sm={6} xs={12} key={text}>
        <Testimonial text={text} author={author} />
      </Grid>
    ))}
  </Grid>
);
