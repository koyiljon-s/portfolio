import Box from "@mui/material/Box";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Contributions from "@/components/Contributions";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <Achievements />
      <Contributions />
      <Footer />
    </Box>
  );
}
