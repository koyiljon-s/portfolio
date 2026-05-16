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
        backgroundColor: "#171717",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters 
         sx={{ 
          gap: 1,
          py: 2,
         }}
        >
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ 
              textDecoration: "none",
              color: "#00e887",
              fontWeight: 400, 
              letterSpacing: "-0.03em"
             }}
          >
            Name&apos;s I/O
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button 
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "#242426",
                color: "#00def2",
              },
              py: 1,
              px: 2,
              borderRadius: 1,
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          > 
           Blog 
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/about"
            sx={{
              "&:hover": {
                backgroundColor: "#242426",
                color: "#00def2",
              },
              py: 1,
              px: 2,
              borderRadius: 1,
              fontWeight: 300,
              fontSize: "0.95rem",
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
              background: "#fff",
              color: "#000",
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
