'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-satoshi), sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 9999,
          paddingInline: 16,
        },
      },
    },
  },
});

export default theme;
