import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const Home = () => {
  // Carousel state - fixed for proper looping
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 2; // Show 2 cards on desktop, 1 on mobile
  const maxSlides = Math.max(0, blogs.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? maxSlides : prev - 1));
  };

  return (
    <div className="min-h-screen">
      {/* 🌈 Hero Section */}
      <section className="bg-gradient-to-br from-neonPink via-purple-600 to-neonGreen text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Speak Loud. Live Real.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your safe space to connect, share, and thrive as your authentic self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-white text-neonPink px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Read Stories
            </Link>
            <Link
              to="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-neonPink transition"
            >
              Find Resources
            </Link>
          </div>
        </div>
      </section>

      {/* 📰 Blog Preview - FIXED CAROUSEL */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Latest from the Blog
        </h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neonPink text-white p-3 rounded-full hover:bg-neonGreen transition shadow-lg"
            aria-label="Previous posts"
          >
            ←
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neonPink text-white p-3 rounded-full hover:bg-neonGreen transition shadow-lg"
            aria-label="Next posts"
          >
            →
          </button>
          
          {/* Carousel Track - FIXED */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                width: `${(blogs.length / cardsPerView) * 100}%`
              }}
            >
              {blogs.map((post) => (
                <div 
                  key={post.id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / blogs.length}%` }}
                >
                  <div className="w-full max-w-sm mx-auto">
                    <BlogCard 
                      id={post.id} 
                      title={post.title} 
                      excerpt={post.excerpt} 
                      date={post.date}
                      image={post.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === index ? 'bg-neonPink' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="text-neonPink font-semibold hover:text-neonGreen transition"
          >
            View All Posts →
          </Link>
        </div>
      </section>

      {/* 🛠 Resources Preview */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Resources That Actually Help
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From crisis support to creative outlets, we've curated resources made by and for LGBTQ+ teens.
          </p>
          <Link
            to="/resources"
            className="bg-neonGreen text-white px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* 🤝 Community Teaser */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            You're Not Alone
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connect with other teens who get it. Share your story, find your people, and build lasting friendships.
          </p>
          <Link
            to="/community"
            className="bg-neonPink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition"
          >
            Join the Community
          </Link>
        </div>
      </section>

      {/* 📧 Newsletter Signup */}
      <section className="bg-gradient-to-r from-neonPink to-neonGreen py-16 px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest posts, resources, and community updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-neonPink px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;