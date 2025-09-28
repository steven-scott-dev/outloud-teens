import React from "react";

const VideoHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        src="/assets/hero.mp4"   // place your video in public/assets
        poster="/assets/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.50) 100%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Speak Loud. Live Real.
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-95">
            A safe and supportive space for LGBTQ+ teens to share, connect, and thrive 💖🌈
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/resources"
              className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-otl-gradient hover:opacity-90 transition"
            >
              Explore Resources →
            </a>
            <a
              href="/blog"
              className="inline-flex items-center px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-darkGray transition"
            >
              Read Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;