import Link from "next/link";

import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageBlock from "../../../types/ImageBlock";

export const AllImages = ({ showAll = false }: { showAll?: boolean }) => {
  const [showAllImages, setShowAllImages] = useState(showAll);
  const [images, setImageIndex] = useState<ImageBlock[]>([]);

  useEffect(() => {
    axios.get("/api/cats/all").then((res) => {
      console.log(res.data.data);

      //@ts-ignore
      setImageIndex(...res.data.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {images
        .filter((_, index) => showAllImages || index < 4)
        .map((image, index) => {
          return (
            <Grid item sm={3} xs={6} key={index}>
              {console.log(image)}
              <Link href={image.url}>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <Box
                    sx={{
                      width: "100%",
                      pt: "75%",
                      background: `url("${image.url}") center center/cover`,
                      borderRadius: 1,
                    }}
                  />
                </a>
              </Link>
            </Grid>
          );
        })}
      {!showAllImages && (
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" onClick={() => setShowAllImages(true)}>
              Show all ({images.length})
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
