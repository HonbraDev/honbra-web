import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "../../../components/Link";
import { arrayRandom } from "../catUtils";

export const Hero = ({
  imagePaths,
  endpoint,
}: {
  imagePaths: string[];
  endpoint: string;
}) => {
  const theme = useTheme();

  const [currentImage, setCurrentImage] = useState(arrayRandom(imagePaths));

  const setRandomImage = () => setCurrentImage(arrayRandom(imagePaths));

  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={0}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Link href={currentImage} target="_blank" rel="noreferrer">
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                background: `url(${currentImage}) center center/cover`,
              }}
            />
          </Link>
          <Box
            sx={{
              position: "absolute",
              bottom: theme.spacing(2),
              right: theme.spacing(2),
            }}
          >
            <Button
              variant="contained"
              disableElevation={false}
              onClick={setRandomImage}
            >
              Reroll
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Card sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4">Getting an image</Typography>
          <Typography variant="body1">
            To get a random image, use the following endpoint:
          </Typography>
          <TextField
            value={endpoint}
            inputProps={{
              readOnly: true,
              style: { textAlign: "center" },
            }}
          />
          <Button
            variant="outlined"
            sx={{ ml: "auto" }}
            onClick={() => navigator.clipboard.writeText(`https://${endpoint}`)}
          >
            Copy
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
