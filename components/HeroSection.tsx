'use client';

import { Box, Typography, Chip, IconButton, Stack, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

const SKILLS = [
  'Node.js',
  'Python',
  'Go',
  'Cloud',
  'Full Stack',
  'Machine Learning',
];

const SOCIAL_LINKS = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <GitHubIcon />, label: 'GitHub', href: '#' },
  { icon: <DescriptionIcon />, label: 'Resume', href: '#' },
  { icon: <EmailIcon />, label: 'Gmail', href: '#' },
];

export default function HeroSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: '"Inter", "Poppins", sans-serif',
          fontWeight: 800,
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          mb: 6,
          letterSpacing: '-0.02em',
          color: isDark ? '#F1F5F9' : '#1E293B',
        }}
      >
        Koyiljon Sultonaliev
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={1.5}
        sx={{ mb: 8 }}
      >
        {SKILLS.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant={isDark ? 'outlined' : 'filled'}
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              py: 3,
              px: 0.5,
              borderRadius: '10px',
              borderWidth: 2,
              borderColor: isDark ? 'rgba(96, 165, 250, 0.5)' : 'primary.main',
              backgroundColor: isDark ? 'rgba(30, 58, 95, 0.3)' : 'rgba(156, 163, 175, 0.2)',
              color: isDark ? '#60A5FA' : 'white',
              '& .MuiChip-label': { px: 2.5 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'primary.dark',
                borderColor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: isDark
                  ? '0 4px 12px rgba(59, 130, 246, 0.3)'
                  : '0 4px 12px rgba(37, 99, 235, 0.3)',
              },
            }}
          />
        ))}
      </Stack>

      <Stack direction="row" spacing={2.5}>
        {SOCIAL_LINKS.map(({ icon, label, href }) => (
          <IconButton
            key={label}
            component="a"
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              gap: 10,
              width: 56,
              height: 56,
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: isDark ? '#60A5FA' : 'primary.main',
              backgroundColor: isDark ? 'rgba(30, 58, 95, 0.5)' : 'rgba(37, 99, 235, 0.1)',
              border: `2px solid ${isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: isDark ? '#3B82F6' : 'primary.main',
                color: '#fff',
                borderColor: isDark ? '#3B82F6' : 'primary.main',
                transform: 'translateY(-4px)',
                boxShadow: isDark
                  ? '0 8px 20px rgba(59, 130, 246, 0.4)'
                  : '0 8px 20px rgba(37, 99, 235, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
}
