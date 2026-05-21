import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface Props {
  posts: BlogPost[];
}

export default function BlogList({ posts }: Props) {
  return (
    <Stack spacing={3}>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              py: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
              transition: "opacity 0.2s",
              "&:hover": { opacity: 0.7 },
            }}
          >
            <Stack
              direction="row"
              sx={{ alignItems: "baseline", justifyContent: "space-between" }}
            >
              <Typography sx={{ 
                 fontWeight: 400,
                 fontSize: "1rem",
                }}
              >
                {post.title}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: "#ededed", 
                flexShrink: 0,
                fontWeight: 400,
                fontSize: "0.9rem",
              }}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Stack>
          </Box>
        </Link>
      ))}
    </Stack>
  );
}
