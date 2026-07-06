'use client';

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar
      component="nav"
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(18px)",
        backgroundColor: "transparent",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #85c2ff 0%, #ada1ff 20%, #fa907f 40%, #ffe770 60%, #b5de7c 80%, #6d89b3 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters 
         sx={{ 
          gap: 1,
          py: 2,
         }}
        >
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{ 
              textDecoration: "none",
              color: "#003811",
              fontWeight: 600, 
              letterSpacing: "-0.03em"
             }}
          >
            KOYILJON&apos;s I/O
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Button
            component={Link}
            href="/about"
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "#003b0e",
            }}
          >
            About me
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/contact"
            sx={{
              "&:hover": {
                backgroundColor: "#88E788",
                
              },
              py: 0.8,
              px: 2.5,
              borderRadius: 1,
              background: "#ccff33",
              color: "#003b0e",
              fontWeight: 400,
              fontSize: "0.95rem",
            }}
          >
            CONTACT
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
