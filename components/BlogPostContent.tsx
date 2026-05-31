"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BlogEmailSubscription from "@/components/BlogEmailSubscription";
import BlogViewCounter from "@/components/BlogViewCounter";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

interface Props {
  post: BlogPost;
  slug: string;
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 1200,
        backgroundColor: "divider",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "#4f95f7",
          transition: "width 0.1s linear",
        }}
      />
    </Box>
  );
}

export default function BlogPostContent({ post, slug }: Props) {
  return (
    <>
      <ReadingProgress />

      <Link href="/blog" style={{ textDecoration: "none" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#63d685",
            mb: 4,
            fontWeight: 600,
            fontSize: "0.80rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            opacity: 0.85,
            "&:hover": { opacity: 1 },
            transition: "opacity 0.15s",
            textTransform: "uppercase",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 16 }} />
          <span>Back to blog</span>
        </Typography>
      </Link>

      {/* Date */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1.25,
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.disabled",
            fontWeight: 400,
            letterSpacing: "0.03em",
            fontSize: "0.8125rem",
            textTransform: "uppercase",
          }}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>

        <BlogViewCounter slug={slug} />
      </Box>

      {/* Title */}
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontWeight: 400,
          mb: 2,
          letterSpacing: "-0.025em",
          lineHeight: 1.25,
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
        }}
      >
        {post.title}
      </Typography>

      {/* Description / lede */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 3,
          fontSize: "1.1875rem",
          lineHeight: 1.7,
          maxWidth: "55ch",
          fontStyle: "italic",
          opacity: 0.8,
        }}
      >
        {post.description}
      </Typography>

      {/* Tags */}
      <Stack direction="row" spacing={0.75} sx={{ mb: 5, flexWrap: "wrap", gap: 0.75 }}>
        {post.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="outlined"
            sx={{
              fontSize: "0.75rem",
              height: 24,
              borderRadius: "4px",
              letterSpacing: "0.02em",
            }}
          />
        ))}
      </Stack>

      {/* Divider */}
      <Box sx={{ borderTop: "1px solid", borderColor: "divider", mb: 5 }} />

      {/* Article body */}
      <Box
        sx={{
          maxWidth: "65ch",

          // Drop cap on the first paragraph
          "& > p:first-of-type::first-letter": {
            float: "left",
            fontSize: "3.5rem",
            lineHeight: 0.85,
            fontWeight: 300,
            mr: 0.5,
            mt: "6px",
            color: "text.primary",
          },

          "& h1, & h2, & h3, & h4": {
            color: "text.primary",
            letterSpacing: "-0.02em",
          },
          "& h1": {
            typography: "h5",
            fontWeight: 500,
            mt: 7,
            mb: 2,
          },
          "& h2": {
            fontSize: "1.375rem",
            fontWeight: 500,
            mt: 6,
            mb: 1.5,
          },
          "& h3": {
            fontSize: "1.125rem",
            fontWeight: 500,
            mt: 4,
            mb: 1,
            letterSpacing: "-0.01em",
          },

          "& p": {
            fontSize: "1.1875rem",
            lineHeight: 1.95,
            mb: 3,
            color: "text.secondary",
          },

          "& a": {
            color: "#4f95f7",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            textDecorationThickness: "1px",
            textDecorationColor: "rgba(79,149,247,0.35)",
            "&:hover": {
              textDecorationColor: "#4f95f7",
            },
          },

          "& ul, & ol": {
            mb: 3,
            pl: "1.5em",
          },
          "& li": {
            fontSize: "1.1875rem",
            color: "text.secondary",
            lineHeight: 1.85,
            mb: 1,
          },
          "& li::marker": {
            color: "text.disabled",
          },

          "& strong": {
            fontWeight: 600,
            color: "text.primary",
          },

          "& em": {
            fontStyle: "italic",
            color: "text.secondary",
          },

          // Pull-quote style blockquote
          "& blockquote": {
            backgroundColor: "action.hover",
            borderLeft: "3px solid #4f95f7",
            borderRadius: "0 6px 6px 0",
            pl: 3,
            pr: 2.5,
            py: 2,
            my: 4,
            "& p": {
              fontSize: "1.25rem",
              fontStyle: "italic",
              lineHeight: 1.75,
              color: "text.primary",
              mb: 0,
              opacity: 0.9,
            },
          },

          // Inline code
          "& :not(pre) > code": {
            backgroundColor: "action.selected",
            color: "text.primary",
            px: "0.45em",
            py: "0.15em",
            borderRadius: "4px",
            fontSize: "0.875em",
            fontFamily: "var(--font-geist-mono), 'JetBrains Mono', monospace",
            border: "1px solid",
            borderColor: "divider",
          },

          // Code blocks
          "& pre": {
            backgroundColor: "grey.900",
            p: "1.25rem 1.5rem",
            borderRadius: "8px",
            overflowX: "auto",
            mb: 3.5,
            mt: 0.5,
            border: "1px solid",
            borderColor: "divider",
            lineHeight: 1.65,
            "& code": {
              backgroundColor: "transparent",
              border: "none",
              px: 0,
              py: 0,
              color: "grey.200",
              fontSize: "0.875rem",
              fontFamily: "var(--font-geist-mono), 'JetBrains Mono', monospace",
            },
          },

          "& hr": {
            borderColor: "divider",
            my: 7,
          },

          // Images
          "& img": {
            maxWidth: "100%",
            borderRadius: "8px",
            display: "block",
            my: 4,
          },
        }}
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Box>

      <BlogEmailSubscription />
    </>
  );
}
