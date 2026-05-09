"use client";

import Cal from "@calcom/embed-react";
import { Box, Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            background:
             "linear-gradient(90deg, #00C98D 0%, #00D9B5 50%, #42D9BC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            mb: 1,
          }}
        >
          Let&apos;s Talk
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 600,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Schedule a quick meeting
        </Typography>

        <Box
          sx={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Cal
            calLink="https://cal.com/qoyiljon-sultonalieyv-sjg7ng/15min"
            config={{
              theme: "dark",
            }}
            style={{
              width: "850px",
              height: "660px",
              border: "none",
            }}
          />
        </Box>
        <Box
          sx={{
            mb: 12,
            textAlign: "left",
            ml: 19,
          }}
        >
          <Typography
            sx={{
              color: "fff",
              fontWeight: 500,
              fontSize: "0.87rem",
            }}
          >
            Or reach out at{" "}
            <Box
              component="a"
              href="mailto:mail@koyiljon.com"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.2s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              mail@koyiljon.com
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
