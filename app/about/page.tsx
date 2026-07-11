import Box from "@mui/material/Box";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <AboutMe />
      </Box>
      <Footer />
    </Box>
  );
}
