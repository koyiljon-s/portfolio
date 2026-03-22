'use client';

import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from './ThemeProvider';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              variant="text"
              disableElevation
              sx={{ fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont', fontWeight: 600, fontSize: '1.3rem' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: 1,
            borderRadius: 10,
            borderColor: 'divider',
            p: 0.5,
            bgcolor: 'background.paper',
          }}
        >
          <IconButton
            size="small"
            onClick={mode === 'dark' ? toggleTheme : undefined}
            sx={{
              color: mode === 'light' ? 'primary.main' : 'text.secondary',
              bgcolor: mode === 'light' ? 'action.selected' : 'transparent',
              '&:hover': { bgcolor: mode === 'light' ? 'action.selected' : 'action.hover' },
            }}
          >
            <LightModeIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={mode === 'light' ? toggleTheme : undefined}
            sx={{
              color: mode === 'dark' ? 'primary.main' : 'text.secondary',
              bgcolor: mode === 'dark' ? 'action.selected' : 'transparent',
              '&:hover': { bgcolor: mode === 'dark' ? 'action.selected' : 'action.hover' },
            }}
          >
            <DarkModeIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
