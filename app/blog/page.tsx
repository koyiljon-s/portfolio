import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const dynamic = "force-static";

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(".md", ""),
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, py: 20 }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" sx={{ fontWeight: 300, mb: 6, textAlign: "center", fontSize: "1.5rem" }}>
            Blog
          </Typography>
          <BlogList posts={posts} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
