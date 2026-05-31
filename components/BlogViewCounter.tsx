"use client";

import Box from "@mui/material/Box";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export default function BlogViewCounter({ slug }: Props) {
  const [views, setViews] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    const loadViews = async () => {
      try {
        const response = await fetch(`/api/blog-views/${encodeURIComponent(slug)}?t=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load views");
        }

        const data = (await response.json()) as { views?: number };
        if (mounted) {
          setViews(typeof data.views === "number" ? data.views : 0);
          setHasError(false);
        }
      } catch {
        if (mounted) {
          setHasError(true);
        }
      }
    };

    loadViews();
    const intervalId = window.setInterval(loadViews, 60_000);

    return () => {
      mounted = false;
      controller.abort();
      window.clearInterval(intervalId);
    };
  }, [slug]);

  return (
    <Box
      aria-live="polite"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
      }}
    >
      <VisibilityOutlinedIcon
        sx={{
          fontSize: 16,
          color: "text.disabled",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.disabled",
          fontSize: "0.8125rem",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {hasError
          ? "View count unavailable"
          : views === null
            ? "Loading views..."
            : views.toLocaleString()}
      </Typography>
    </Box>
  );
}
