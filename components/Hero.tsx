import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 3 },
          py: { xs: 6, md: 6},
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 0,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0, textAlign: "left", bgcolor: "#d2ff4a", borderRadius: 2,}}>
            <Typography
              variant="h1"
              sx={{
                color: "#000",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                fontSize: { xs: "2.5rem", md: "4.5rem", lg: "3.5rem" },
                lineHeight: 0.95,
                bgcolor: "#d2ff4a",
                height: "340px",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                p: 3,
              }}
            >
              Koyiljon Sultonaliev
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              textAlign: "right",
              bgcolor: "#d2ff4a",
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                color: "#000",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                fontSize: { xs: "1.5rem", md: "2.75rem", lg: "1.5rem" },
                lineHeight: 1,
                height: "340px",
                p: 3,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              Software Engineer
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
