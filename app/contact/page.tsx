import Box from "@mui/material/Box";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
   
      <BookingSection />
      
      <Footer />
    </Box>
  );
}
