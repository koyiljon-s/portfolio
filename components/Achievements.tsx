"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const achievements = [
  {
    subtitle: "Award",
    title: "Woosong University Standard Field Co-op internship competition award",
    timing: "Jun 18, 2025",
    image: "/wsu-award.jpg",
  },
  {
    subtitle: "Startup",
    title: "Joined Google Start up Campus Member, Seoul",
    timing: "Mar 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&q=80",
  },
  {
    subtitle: "Career",
    title: "Started working as a Software Engineer at Bee Intelligence Global",
    timing: "Sep 1, 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80",
  },
];

export default function Achievements() {
  return (
    <Box
      component="section"
      id="achievements"
      sx={{
        py: { xs: 10, md: 12 },
        background: "#000",
        borderTop: "2px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 500,
            letterSpacing: "-0.05em",
            fontSize: { xs: "2rem", md: "2.25rem" },
            pb: 10,
            textAlign: "center",
          }}
        >
          Achievements
        </Typography>
        <Box
          sx={{
            display: "flex",
            border: "1px solid",
            borderColor: "grey.800",
          }}
        >
          {achievements.map((row, i) => (
            <Box
              key={row.title}
              sx={{
                flex: 1,
                display: "flex",
                borderRight: i < achievements.length - 1 ? "1px solid" : "none",
                borderColor: "grey.800",
              }}
            >
              <Box
                sx={{
                  width: 180,
                  flexShrink: 0,
                  backgroundImage: `url(${row.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#deeb4d",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    mb: 1,
                  }}
                >
                  {row.subtitle}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    mb: 2,
                  }}
                >
                  {row.title}
                </Typography>
                <Typography sx={{ color: "grey.400", fontSize: "0.9rem" }}>
                  {row.timing}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
