// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  content?: string; // optional, for full blog posts
}