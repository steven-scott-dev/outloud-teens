// src/pages/Blog.tsx
import BlogCard from "../components/BlogCard";
import type { BlogPost } from "../types/blog";

const posts: BlogPost[] = [
  {
    id: "1",
    title: "Finding Your Voice",
    excerpt: "Ways to express yourself confidently 🌟",
    date: "Sep 4, 2025",
    image: "/path.jpg",
  },
  {
    id: "2",
    title: "Building Safe Spaces",
    excerpt: "How to recognize + create supportive community.",
    date: "Aug 20, 2025",
  },
];

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((p) => (
        <BlogCard key={p.id} {...p} />
      ))}
    </section>
  );
}