// src/pages/BlogDetail.tsx
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link 
          to="/blog" 
          className="bg-neonPink text-white px-6 py-3 rounded hover:bg-neonGreen transition"
        >
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-16 px-6">
      {/* Hero Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-4">
        Published {post.date}
      </p>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <p className="text-xl text-gray-700 mb-6 font-medium">
          {post.excerpt}
        </p>
        <div className="whitespace-pre-line">
          {post.content}
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          to="/blog"
          className="inline-flex items-center text-neonPink font-semibold hover:text-neonGreen transition"
        >
          ← Back to All Posts
        </Link>
      </div>

      {/* Optional: Related Posts or CTA */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-heading font-bold mb-2">
          Want to share your story?
        </h3>
        <p className="text-gray-600 mb-4">
          OutLoud Teens is always looking for authentic voices from our community.
        </p>
        <Link
          to="/contact"
          className="bg-neonPink text-white px-6 py-3 rounded hover:bg-neonGreen transition"
        >
          Get in Touch
        </Link>
      </div>
    </article>
  );
}