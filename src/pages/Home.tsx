// src/pages/Home.tsx
import { Link } from "react-router-dom";

// Mock data right here for now (we'll move it later)
const blogPosts = [
  {
    id: "1",
    title: "Finding Your Voice",
    excerpt: "Ways to express yourself confidently ✨",
    date: "Sep 2025"
  },
  {
    id: "2", 
    title: "Building Safe Spaces",
    excerpt: "How to recognize + create supportive community.",
    date: "Aug 2025"
  },
  {
    id: "3",
    title: "Self-Care Tips", 
    excerpt: "Simple steps to protect your heart & mind 🧘",
    date: "Jul 2025"
  }
];

// Simple BlogCard component right here
function BlogCard({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <div className="bg-white shadow rounded p-6 hover:shadow-neonPink/40 transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{excerpt}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* 🌈 Hero Section */}
      <section className="bg-gradient-to-r from-neonPink to-neonGreen text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Be Proud. Be Loud. Be You 🌈
        </h1>
        <div className="space-x-4">
          <Link
            to="/community"
            className="bg-black text-white px-6 py-3 rounded hover:bg-neonPink transition"
          >
            Join Community
          </Link>
          <Link
            to="/blog"
            className="bg-white text-black px-6 py-3 rounded hover:bg-neonGreen transition"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* 📰 Blog Preview - NOW USING BLOGCARD */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Latest from the Blog
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* 🛟 Resources Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Crisis Support */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-neonPink">
              Crisis Support
            </h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a
                  href="https://www.thetrevorproject.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-prideRed hover:underline"
                >
                  Trevor Project
                </a>
              </li>
              <li>
                <a
                  href="https://www.glsen.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-prideBlue hover:underline"
                >
                  GLSEN
                </a>
              </li>
            </ul>
          </div>

          {/* Guides & Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-neonGreen">
              Guides & Tools
            </h3>
            <ul className="space-y-2 text-lg">
              <li>🌟 Coming Out Checklist</li>
              <li>🧘 Self-Care Toolkit</li>
              <li>💬 Healthy Communication Tips</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 👥 Community Teaser */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">
          Join the OutLoud Teens Community
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Connect with other LGBTQ+ teens in a safe, supportive, and inclusive
          space. 💜
        </p>
        <Link
          to="/community"
          className="bg-neonPink text-white px-8 py-3 rounded-lg font-bold hover:bg-neonGreen transition"
        >
          Get Involved
        </Link>
      </section>

      {/* 📩 Newsletter */}
      <section className="bg-gradient-to-r from-prideBlue to-prideViolet py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-heading font-bold mb-6">
          Stay Connected
        </h2>
        <p className="mb-8">
          Sign up for updates, resources, and community events ✨
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded text-black"
          />
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-neonPink transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}