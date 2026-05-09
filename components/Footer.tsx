import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 4,
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 500,
            fontSize: "0.9rem",
            letterSpacing: "-0.01em",
            color: "fff",
           }}
        >
          © {new Date().getFullYear()} koyiljon.com
        </Typography>
      </Container>
    </Box>
  );
}
