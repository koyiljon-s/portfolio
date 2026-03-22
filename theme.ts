'use client';

import { createTheme } from '@mui/material/styles';

export default function createCustomTheme(mode: 'light' | 'dark') {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563EB',
        dark: '#1E40AF',
        light: '#60A5FA',
      },
      secondary: {
        main: '#1E3A5F',
      },
      background: {
        default: mode === 'light' ? '#F8FAFC' : '#0F172A',
        paper: mode === 'light' ? '#FFFFFF' : '#1E293B',
      },
      text: {
        primary: mode === 'light' ? '#1E293B' : '#F1F5F9',
        secondary: mode === 'light' ? '#64748B' : '#94A3B8',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 800,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#1E293B',
            color: mode === 'light' ? '#1E293B' : '#F1F5F9',
            boxShadow: mode === 'light'
              ? '0px 1px 3px 1px rgba(0, 0, 0, 0.1)'
              : '0px 1px 3px 1px rgba(0, 0, 0, 0.3)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 12,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            padding: undefined,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            padding: undefined,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: undefined,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === 'light'
              ? '0px 1px 3px 1px rgba(0, 0, 0, 0.1)'
              : '0px 1px 3px 1px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  });
}
