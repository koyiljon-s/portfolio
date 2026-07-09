import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        bgcolor: "#000000",
        borderTop: "1px solid #404040",
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "-0.01em",
            color: "#fff",
            py: 2
           }}
        >
          © {new Date().getFullYear()} koyiljon.com
        </Typography>
      </Container>
    </Box>
  );
}
