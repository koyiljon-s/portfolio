'use client';

import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMoreMenuOpen = Boolean(moreAnchorEl);

  const handleMoreOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

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
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 0 }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ 
              textDecoration: "none",
              color: "#00e887",
              fontWeight: 600, 
              letterSpacing: "-0.03em"
             }}
          >
            Koyiljon&apos;s I/O
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
              px: 3,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: "0.97rem",
            }}
          > 
           Blog 
          </Button>
          <Button
            color="inherit"
            aria-controls={isMoreMenuOpen ? "more-menu" : undefined}
            aria-expanded={isMoreMenuOpen ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleMoreOpen}
            sx={{
              "&:hover": {
                backgroundColor: "#242426",
                color: "#00def2",
              },
              py: 1,
              px: 3,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: "0.97rem",
            }}
          >
            More
          </Button>
          <Menu
            id="more-menu"
            anchorEl={moreAnchorEl}
            open={isMoreMenuOpen}
            onClose={handleMoreClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            
          >
            <MenuItem 
              component={Link}
              href="/about"
              onClick={handleMoreClose}
              sx={{
                fontWeight: 500,
                fontSize: "0.97rem",
              }}
            >
              About me
            </MenuItem>
            <MenuItem 
              component={Link}
              href="/contact"
              onClick={handleMoreClose}
              sx={{
                fontWeight: 500,
                fontSize: "0.97rem",
              }}
            >
              Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
