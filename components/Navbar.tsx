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
        backgroundColor: "#000000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters 
         sx={{ 
          gap: 1,
          py: 0.5,
         }}
        >
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{ 
              textDecoration: "none",
              color: "#fff",
              fontWeight: 500, 
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
              py: 0.8,
              px: 2,
              mr: 1,
              border: "1px solid #404040",
              borderRadius: 0,
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "#fff",
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
              borderRadius: 0,
              background: "#deeb4d",
              color: "#003b0e",
              fontWeight: 500,
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
