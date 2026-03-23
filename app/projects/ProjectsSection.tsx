'use client';

import { 
  Box, 
  Typography, 
  Chip, 
  useTheme,
  Container,
  Stack
} from '@mui/material';

interface Project {
  id: number;
  title: string;
  date: string;
  techStacks: string[];
  overview: string;
  description?: string;
  link?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Order Management System',
    date: '2026-03',
    techStacks: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AWS S3', 'JWT' ],
    overview: 'Full-stack MERN admin platform for managing products and orders from Facebook and Instagram ads',
    description: 'Built a scalable MERN stack order management system designed for Facebook and Instagram ad-driven e-commerce. Implemented JWT authentication, RESTful APIs with Node.js and Express, and MongoDB schema design for products, orders, and users. Created an admin dashboard with order workflow management, and product CRUD functionality. Used AWS S3 for image uploads and Tailwind CSS for responsive UI. Structured the application for maintainability and scalability under high traffic conditions.',
    link: 'https://github.com/koyiljon-s/leadcenter',
    linkText: 'GitHub Repo',
  },
  {
    id: 2,
    title: 'Authentication Service',
    date: '2025-12',
    techStacks: ['Golang', 'Gin', 'PostgreSQL', 'JWT', 'Docker', 'OAuth2.0'],
    overview: 'User Authentication and Authorization Server for microservices',
    description: 'Developed a Go microservice for user management using Gin framework, PostgreSQL, and JWT authentication. Provides REST endpoints: /api/register (user creation with bcrypt hashing), /api/login (JWT issuance), and authentication/authorization with Google OAuth 2.0 /api/me routes (GET/PUT/DELETE for self-profile) plus internal /api/users/:id. Uses middleware for JWT validation, env-based config, and Docker Compose for PostgreSQL',
    link: 'https://github.com/koyiljon-s/user-service',
    linkText: 'GitHub Repo',
  },
  {
    id: 3,
    title: 'Instruction-Tuned Language Model',
    date: '2025-08',
    techStacks: ['Deep Learning', 'HugingFace', 'PyTorch', 'AWS', 'OpenAI API'],
    overview: 'Instruction-tuned large language model specifically for the Uzbek language by fine-tuning Mistral-7B using QLoRA',
    description: 'Created a high-quality synthetic dataset of ~23,000 diverse Uzbek instruction-response pairs (covering tasks such as summarization, description, question generation, calculation, translation, reasoning, and more) by leveraging GPT-4o through the OpenAI API at a total cost of only $88. Performed memory-efficient fine-tuning on a single AWS g5.xlarge instance (NVIDIA A10G GPU) with a compute cost of ~$15, demonstrating accessible and cost-effective adaptation of open-weight models to underrepresented languages. Evaluated the model across multiple language tasks to confirm improved instruction alignment, coherence, and task performance compared to the base Mistral-7B, contributing to the growing ecosystem of multilingual and low-resource LLMs.',
    link: 'https://huggingface.co/datasets/koyiljon-s/uz.self-instruct',
    linkText: 'Dataset is available on HuggingFace',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    date: '2026-01',
    techStacks: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'FSD Architecture', 'Vercel'],
    overview: 'Korea Location-Based Weather Dashboard',
    description: 'Built a responsive South Korea weather app using React (functional components), TypeScript, Feature-Sliced Design (FSD) architecture, and TanStack Query for server-state management. On mount, it obtains the user geolocation via the browser API and fetches current temperature, daily min/max, and hourly forecasts from OpenWeatherMap or 공공데이터포털 API. Search supports any Korean administrative unit (시/도/구/동) by indexing the provided korea_districts.json for prefix/autocomplete matching, mapping selected entries to lat/lon or grid coordinates, with fallback UI for missing weather data. Favorites (max 6) are persisted in localStorage, support editable aliases, and render as cards showing current conditions + min/max; clicking opens a detail page with full forecast data. Tailwind CSS handles mobile-first responsive layout. All async operations are managed declaratively via TanStack Query with proper caching, error handling, and optimistic patterns where applicable.',
    link: 'https://weather-app-theta-cyan-75.vercel.app/',
    linkText: 'Live Demo',
  },
];

export default function ProjectsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const lightColors = {
    container: '#222222',
    section1: 'white',
    section2: '#D3D3D3',
    text: 'black',
    label: '#666666',
    overview: '#2563EB',
  };

  const darkColors = {
    container: '#222222',
    section1: '#111111',
    section2: '#222222',
    text: '#F1F5F9',
    label: '#94A3B8',
    overview: '#60A5FA',
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: colors.container, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: colors.section1 }}>
        <Container maxWidth="lg" disableGutters>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: colors.text, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
            {projects[0].title}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 600, color: colors.label, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Date:</Typography>
            <Typography sx={{ color: colors.text, fontWeight: 500, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[0].date}</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Tech Stacks:</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {projects[0].techStacks.map((tech) => (
              <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }} />
            ))}
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Overview:</Typography>
          <Typography sx={{ color: colors.overview, fontWeight: 600, mb: 2, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[0].overview}</Typography>
          <Typography sx={{ color: colors.text, fontSize: { xs: 14, sm: 16, md: 18 }, lineHeight: 1.8, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[0].description}</Typography>
          {projects[0].link && (
            <Box component="a" href={projects[0].link} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', mt: 2, color: colors.overview, textDecoration: 'underline', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              {projects[0].linkText}
            </Box>
          )}
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: colors.section2 }}>
        <Container maxWidth="lg" disableGutters>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: colors.text, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
            {projects[1].title}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 600, color: colors.label, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Date:</Typography>
            <Typography sx={{ color: colors.text, fontWeight: 500, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[1].date}</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Tech Stacks:</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {projects[1].techStacks.map((tech) => (
              <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }} />
            ))}
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Overview:</Typography>
          <Typography sx={{ color: colors.overview, fontWeight: 600, mb: 2, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[1].overview}</Typography>
          <Typography sx={{ color: colors.text, fontSize: { xs: 14, sm: 16, md: 18 }, lineHeight: 1.8, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[1].description}</Typography>
          {projects[1].link && (
            <Box component="a" href={projects[1].link} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', mt: 2, color: colors.overview, textDecoration: 'underline', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              {projects[1].linkText}
            </Box>
          )}
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: colors.section1 }}>
        <Container maxWidth="lg" disableGutters>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: colors.text, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
            {projects[2].title}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 600, color: colors.label, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Date:</Typography>
            <Typography sx={{ color: colors.text, fontWeight: 500, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[2].date}</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Tech Stacks:</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {projects[2].techStacks.map((tech) => (
              <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }} />
            ))}
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Overview:</Typography>
          <Typography sx={{ color: colors.overview, fontWeight: 600, mb: 2, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[2].overview}</Typography>
          <Typography sx={{ color: colors.text, fontSize: { xs: 14, sm: 16, md: 18 }, lineHeight: 1.8, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[2].description}</Typography>
          {projects[2].link && (
            <Box component="a" href={projects[2].link} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', mt: 2, color: colors.overview, textDecoration: 'underline', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              {projects[2].linkText}
            </Box>
          )}
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: colors.section2 }}>
        <Container maxWidth="lg" disableGutters>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: colors.text, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
            {projects[3].title}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 600, color: colors.label, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Date:</Typography>
            <Typography sx={{ color: colors.text, fontWeight: 500, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[3].date}</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Tech Stacks:</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {projects[3].techStacks.map((tech) => (
              <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }} />
            ))}
          </Stack>
          <Typography sx={{ fontWeight: 600, color: colors.label, mb: 1, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Overview:</Typography>
          <Typography sx={{ color: colors.overview, fontWeight: 600, mb: 2, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[3].overview}</Typography>
          <Typography sx={{ color: colors.text, fontSize: { xs: 14, sm: 16, md: 18 }, lineHeight: 1.8, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{projects[3].description}</Typography>
          {projects[3].link && (
            <Box component="a" href={projects[3].link} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block', mt: 2, color: colors.overview, textDecoration: 'underline', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              {projects[3].linkText}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
