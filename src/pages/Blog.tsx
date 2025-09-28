import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogCard: React.FC<{ blog: any }> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={blog.image} 
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        <Link 
          to={`/blog/${blog.id}`}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-green-400 text-white font-semibold rounded-full hover:from-pink-600 hover:to-green-500 transition-all"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-green-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Real stories, safe resources, and the vibes that keep you going. 
            This is where we get real about being LGBTQ+ teens.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Empty State (if no blogs) */}
        {blogs.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No blog posts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to share your story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            OutLoud Teens is built by and for our community. 
            Your voice matters here.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-green-400 text-white font-semibold rounded-full hover:from-pink-600 hover:to-green-500 transition-all text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;