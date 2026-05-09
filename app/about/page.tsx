import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, display: "grid", placeItems: "center", py: 10 }}>
        <Container maxWidth="md">
          <Stack spacing={2}>
            <Typography component="h1" variant="h3" sx={{ fontWeight: 200 }}>
              About me
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              This page is a placeholder for your personal introduction. You can expand it
              with biography, experience, and links whenever you are ready.
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
