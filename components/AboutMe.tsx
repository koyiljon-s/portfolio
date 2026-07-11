import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const paragraphs = [
  "Hi, I'm Koyiljon Sultonaliev — a Software Engineer. I build things for the web with a focus on clean interfaces, thoughtful systems, and real-world impact.",
  "I'm currently working at Bee Intelligence Global, where I contribute to products that sit at the intersection of technology and agriculture. Before that, I was part of Google's Startup Campus community in Seoul, where I connected with builders and founders from across the region.",
  "I graduated from Woosong University in Daejeon, where I won a Standard Field Co-op internship competition award — an experience that solidified my passion for shipping meaningful software.",
  "Outside of code, I'm curious about startups, open-source collaboration, and the ways software can solve problems in emerging markets. I'm always open to new conversations and opportunities.",
];

export default function AboutMe() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        background: "#000",
        borderTop: "2px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="md">
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
          About me
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {paragraphs.map((text, i) => (
            <Typography
              key={i}
              sx={{
                color: "grey.300",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
