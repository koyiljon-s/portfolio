import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
   
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          sx={{ 
            py: 2,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            bgcolor: "#d3ff4f",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "-0.01em",
            color: "#003811",
           }}
        >
          © {new Date().getFullYear()} koyiljon.com
        </Typography>
      </Container>
    </Box>
  );
}
