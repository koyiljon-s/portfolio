'use client';

import { Box, Button } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 40,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        pb: 2,
      }}
    >
      <Button
        disableRipple
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 400,
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.6)',
          textTransform: 'none',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.15)',
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          px: 2,
          py: 0.75,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
          },
        }}
      >
        © 2026 Developed &amp; Designed by Koyiljon Sultonaliev
      </Button>
    </Box>
  );
}
