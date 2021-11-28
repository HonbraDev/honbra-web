import Link from "next/link";

import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";

export const AllImages = ({
  paths,
  showAll = false,
}: {
  paths: string[];
  showAll?: boolean;
}) => {
  const [showAllImages, setShowAllImages] = useState(showAll);
  return (
    <Grid container spacing={2}>
      {paths
        .filter((_, index) => showAllImages || index < 4)
        .map((image, index) => (
          <Grid item sm={3} xs={6} key={index}>
            <Link href={image}>
              <a href={image} target="_blank" rel="noreferrer">
                <Box
                  sx={{
                    width: "100%",
                    pt: "75%",
                    background: `url("${image}") center center/cover`,
                    borderRadius: 1,
                  }}
                />
              </a>
            </Link>
          </Grid>
        ))}
      {!showAllImages && (
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" onClick={() => setShowAllImages(true)}>
              Show all ({paths.length})
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
