import Box from "@mui/material/Box";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <Box sx={{ flex: 1 }} />
      <Footer />
    </Box>
  );
}
