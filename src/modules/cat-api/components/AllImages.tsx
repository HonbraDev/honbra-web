import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "../../../components/Link";

export const AllImages = ({
  imagePaths,
  showAll = false,
}: {
  imagePaths: string[];
  showAll?: boolean;
}) => {
  const [showAllImages, setShowAllImages] = useState(showAll);

  return (
    <Grid container spacing={2}>
      {imagePaths
        .filter((_, index) => showAllImages || index < 4)
        .map((image, index) => (
          <Grid item sm={3} xs={6} key={index}>
            <Link href={image} target="_blank" rel="noreferrer">
              <Box
                sx={{
                  width: "100%",
                  pt: "75%",
                  background: `url("${image}") center center/cover`,
                  borderRadius: 1,
                }}
              />
            </Link>
          </Grid>
        ))}
      {!showAllImages && (
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" onClick={() => setShowAllImages(true)}>
              Show all ({imagePaths.length})
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
