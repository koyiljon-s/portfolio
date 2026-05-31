import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogPostContent from "@/components/BlogPostContent";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags ?? [],
    content,
  };
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(".md", "") }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, py: 10 }}>
        <Container maxWidth="sm">
          <BlogPostContent post={post} slug={slug} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
