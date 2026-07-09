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
      id="contributions"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
        background:
          "#f7f7f7",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "12px",
      }}
      >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 30%" },
              minWidth: 0,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#1a1a1a",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                fontSize: { xs: "2rem", md: "1.85rem" },
                maxWidth: 400,
              }}
            >
              My contributions
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 70%" },
              minWidth: 0,
            }}
          >
            <Stack spacing={2.5}>
              {contributions.map((project) => (
                <Paper
                  key={project.name}
                  component="article"
                  elevation={0}
                  sx={{
                 
                    p: { xs: 3, md: 0 },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #b2d9c9 0%, #dedede 100%)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#0d0d0d",
                          fontWeight: 400,
                          letterSpacing: "-0.04em",
                          mb: 1.5,
                          px: 4,
                          pt: 2,
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
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#0d0d0d",
                            fontWeight: 500,
                            px: 4,
                            py: 0.4,
                          }}
                        >
                          {project.dateRange}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#0d0d0d",
                            fontWeight: 400,
                            textAlign: "right",
                            px: 4,
                            py: 0.4,
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
                            color: "#0d0d0d",
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
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
