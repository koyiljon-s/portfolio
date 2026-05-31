"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function BlogEmailSubscription() {
  return (
    <Box
      sx={{
        mt: 18,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        p: { xs: 3, sm: 4 },
        background: "#ff5e1f",
      
      }}
    >
      <Stack spacing={1.25} sx={{ maxWidth: "65ch" }}>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          Get new posts by email
        </Typography>
      </Stack>

      <Box
        component="form"
        action="https://buttondown.com/api/emails/embed-subscribe/koyiljon"
        method="post"
        className="embeddable-buttondown-form"
        sx={{
          mt: 2,
          display: "grid",
          gap: 2,
          maxWidth: 520,
        }}
      >
        <TextField
          id="bd-email"
          name="email"
          type="email"
          fullWidth
          required
          placeholder="you@example.com"
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            borderRadius: 1,
            "& .MuiInputBase-input": {
              color: "#171717",
            },
            "& input::placeholder": {
              color: "#171717",
              opacity: 1,
            },
          }}
        />
        <Button type="submit" variant="contained" sx={{ 
           alignSelf: "start", 
           bgcolor: "#fffbf5",
           boxShadow: "none",
           fontWeight: 600,
          }}>
          Subscribe
        </Button>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Link
            href="https://buttondown.com/refer/koyiljon"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ color: "inherit" }}
          >
            Powered by Buttondown.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
