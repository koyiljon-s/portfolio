'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeMode } from './ThemeProvider';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        {isMobile && (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {!isMobile && navItems.map((item) => (
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
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
