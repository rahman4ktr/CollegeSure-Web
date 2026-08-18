"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const collegeSureTheme = createTheme({
  palette: {
    primary: {
      main: "#04164B",
      light: "#0B3C5D",
      dark: "#040943",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#B30F66",
      light: "#FEF2F7",
      dark: "#591084",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#0D9488",
      light: "#CCFBF1",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#159447",
      light: "#E6F4EA",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F36C21",
      light: "#FEF7F3",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: "10px 24px",
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          borderColor: "#E2E8F0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={collegeSureTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
