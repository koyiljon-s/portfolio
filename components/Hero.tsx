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
        backgroundColor: "#000",
      }}
    >
      <Container
        maxWidth="xl"
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
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  fontSize: { xs: "2.5rem", md: "4.5rem", lg: "3.5rem" },
                  lineHeight: 0.95,
                  bgcolor: "#000",
                  height: "340px",
                  p: 3,
                  border: "1px solid #404040",
                }}
              >
                <Box component="span" sx={{ color: "#deeb4d" }}>
                  K
                </Box>
                oyiljon
                <br />
                <Box component="span" sx={{ color: "#deeb4d" }}>
                  S
                </Box>
                ultonaliev
                <Box
                  component="div"
                  sx={{
                    mt: 18,
                    color: "#deeb4d",
                    fontWeight: 400,
                    letterSpacing: "-0.04em",
                    fontSize: { xs: "1.5rem", md: "2.75rem", lg: "1.5rem" },
                    lineHeight: 1,
                  }}
                >
                  Software Engineer
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "start",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              color: "#deeb4d",
              fontWeight: 400,
              letterSpacing: "-0.04em",
              fontSize: { xs: "1.5rem", md: "2.75rem", lg: "1.5rem" },
              lineHeight: 1,
              height: "340px",
              p: 3,
              width: "100%",
              boxSizing: "border-box",
              bgcolor: "#000",
              border: "1px solid #404040",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
