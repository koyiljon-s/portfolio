'use client';

import { Box, Typography, Grid, useTheme, Card } from '@mui/material';
import { useState, useEffect } from 'react';

const PHOTOS = ['/portfolio.jpg', '/portfolio-2.png'];

const ABOUT_TEXT = {
  greeting: "Wellcome to my website!",
  description: `My name is Koyiljon Sultonaliev. I am a student at Woosong University(Daejeon) majoring in AI and Big Data, and I am working as a Software Engineer.

As an experienced Software Engineer, I have developed backend services, full-stack applications and machine learning solutions with a focus on turning AI insights into real-world, high-impact software. 

I’m particularly passionate about making intelligent systems that are not just powerful, but practical and efficient.
`,
};


export default function AboutSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 3, md: 8 },
        bgcolor: isDark ? '#111111' : 'white',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                bgcolor: isDark ? 'rgba(30, 58, 95, 0.3)' : 'rgba(37, 99, 235, 0.05)',
                border: `2px solid ${isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  paddingTop: '100%',
                  position: 'relative',
                  bgcolor: isDark ? '#1E293B' : '#E2E8F0',
                  backgroundImage: 'url(/profile-placeholder.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Box
                  component="img"
                  src={PHOTOS[currentPhotoIndex]}
                  alt="K"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: { xs: 2, md: 4 },
                borderRadius: 4,
                bgcolor: isDark ? 'rgba(30, 58, 95, 0.2)' : 'rgba(255, 255, 255, 0.8)',
                border: `1px solid ${isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(37, 99, 235, 0.1)'}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: isDark ? '#F1F5F9' : '#1E293B',
                  mb: 3,
                }}
              >
                {ABOUT_TEXT.greeting}
              </Typography>

              {ABOUT_TEXT.description.split('\n\n').map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  sx={{
                    color: isDark ? 'white' : 'black',
                    lineHeight: 1.8,
                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                    fontWeight: 500,
                    mb: index < ABOUT_TEXT.description.split('\n\n').length - 1 ? 3 : 0,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 12,
            mx: '-50vw',
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 6 },
            bgcolor: isDark ? '#1E293B' : '#E0E0E0',
            width: '100vw',
            ml: 'calc(50% - 50vw)',
          }}
        >
          <Box sx={{ maxWidth: 700, pl: { md: 16 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 550,
                color: isDark ? 'white' : 'black',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                fontSize: {md: '1.3rem' },
              }}
            >
            Besides Software Development...
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              color: isDark ? 'white' : 'black',
              mb: 4,
            }}
          >
            I am also a passionate CHESS PLAYER.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#94A3B8' : 'black',
              lineHeight: 1.8,
              mb: 6,
              fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Chess sharpens my strategic thinking and problem-solving skills—qualities that 
            translate directly into building better software.
          </Typography>

          <Box
            component="a"
            href="https://www.chess.com/member/qoyiljons"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 4,
              py: 1.5,
              border: `2px solid ${isDark ? 'rgba(96, 165, 250, 0.4)' : 'rgba(37, 99, 235, 0.3)'}`,
              borderRadius: 1,
              color: isDark ? '#60A5FA' : '#3B82F6',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.05)',
                borderColor: isDark ? '#60A5FA' : '#3B82F6',
              },
            }}
          >
            Play against me on Chess.com
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
