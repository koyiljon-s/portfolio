import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const contributions = [
  {
    name: "WakilAI",
    dateRange: "Nov 2025 - Apr 2026",
    location: "Incheon, South Korea",
    summary: [
      "- AI assistant for legal inquiries. Developed an admin analytics dashboard to track activity from 4,500+ users.",
      "- Migrated the chat codebase from Next.js to Nuxt.js, which significantly decreased response latency. Contributed to the landing page build.",
      "Techs: FastAPI, TypeScript, Material UI, MongoDB, etc.",
    ],
  },
  {
    name: "KumushAI",
    dateRange: "Feb 2026 - Apr 2026",
    location: "Incheon, South Korea",
    summary: [
      "- AI-powered voice agent. Implemented LiveKit audio reactivity, waveform visualization, and redesigned the live call UI using MUI segmented controls.",
      "Techs: Next.js, TypeScript, Docker, ElevenLabs, etc.",
    ],
  },
];

export default function Contributions() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        background:
          "#151a26",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: { xs: 4, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              fontSize: { xs: "2rem", md: "3.25rem" },
            }}
          >
            My contributions
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.5, md: 3 },
            gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" },
          }}
        >
          {contributions.map((project) => (
            <Paper
              key={project.name}
              component="article"
              elevation={0}
              sx={{
                p: { xs: 3, md: 0 },
                position: "relative",
                overflow: "hidden",
                borderRadius: 0,
                border: "0.5px solid #393e4f",
                background:
                  "#1a2033",
                backdropFilter: "blur(16px)",
              }}
            >
              <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#fff",
                      fontWeight: 400,
                      letterSpacing: "-0.04em",
                      mb: 1.5,
                      px: 4,
                      pt: 2,
                      backgroundColor: "#353057",
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      pb: 1.25,
                      borderBottom: "1px solid #cfa2fc",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#cfd5e2",
                        fontWeight: 500,
                        px: 4,
                        py: 0.4,
                        backgroundColor: "#353057",
                      }}
                    >
                      {project.dateRange}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#98a2b3",
                        fontWeight: 400,
                        textAlign: "right",
                        px: 4,
                        py: 0.4,
                        backgroundColor: "#353057",
                      }}
                    >
                      {project.location}
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={1.5} component="ul" sx={{ m: 0, px: 4, pb: 3 }}>
                  {project.summary.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      sx={{
                        color: "#e7eaf2",
                        lineHeight: 1.7,
                        fontWeight: 300,
                        "&::marker": {
                          color: "#8fd3ff",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
