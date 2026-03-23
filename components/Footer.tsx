'use client';

import { Box, Button, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

const SOCIAL_LINKS = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/koyiljon/' },
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/koyiljon-s' },
  { icon: <DescriptionIcon />, label: 'Resume', href: '#' },
  { icon: <EmailIcon />, label: 'Gmail', href: 'mailto:sultonalieyvqoyiljon@gmail.com' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 4,
        bgcolor: 'white',
      }}
    >
      <Button
        disableRipple
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 400,
          fontSize: '1rem',
          color: 'black',
          textTransform: 'none',
          borderRadius: 20,
          border: '1px solid rgba(0, 0, 0, 0.15)',
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          px: 2,
          py: 0.75,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(0, 0, 0, 0.25)',
          },
        }}
      >
        © 2026 Developed &amp; Designed by Koyiljon Sultonaliev
      </Button>

      <Stack direction="row" spacing={1.5}>
        {SOCIAL_LINKS.map(({ icon, label, href }) => {
          const brandColors: Record<string, string> = {
            LinkedIn: '#0A66C2',
            GitHub: '#333333',
            Resume: '#4A90D9',
            Gmail: '#EA4335',
          };
          return (
            <IconButton
              key={label}
              component="a"
              href={href}
              aria-label={label}
              target={label === 'Gmail' ? undefined : '_blank'}
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: brandColors[label] || 'rgba(0, 0, 0, 0.6)',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {icon}
            </IconButton>
          );
        })}
      </Stack>
    </Box>
  );
}
