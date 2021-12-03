import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007fff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      defaultProps: {
        raised: false,
        variant: "outlined",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        // disableRipple: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;
