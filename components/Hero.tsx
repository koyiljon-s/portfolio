import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
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
            display: "grid",
            width: "100%",
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 0,
          }}
        >
          <Box
            sx={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                bgcolor: "#d2ff4a",
                borderRadius: 2,
              }}
            >
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
                display: "flex",
                gap: 1.5,
                px: 3,
                py: 1.5,
                flexWrap: "wrap",
                bgcolor: "#d2ff4a",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}
            >
              <Button
                type="button"
                sx={{
                  borderRadius: 999,
                  px: 3.5,
                  py: 1,
                  minHeight: 44,
                  backgroundColor: "#003b0e",
                  color: "#ccff33",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  "&:hover": {
                    backgroundColor: "#1e293b",
                  },
                }}
              >
                Contributions
              </Button>
              <Button
                type="button"
                sx={{
                  borderRadius: 999,
                  px: 3.5,
                  py: 1,
                  minHeight: 44,
                  border: "1px solid #0f172a",
                  color: "#003b0e",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(15, 23, 42, 0.06)",
                    borderColor: "#1e293b",
                  },
                }}
              >
                Projects
              </Button>
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
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
              bgcolor: "#d2ff4a",
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            Software Engineer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
