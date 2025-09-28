import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard: React.FC<{ 
  title: string; 
  description: string; 
  link: string; 
  type: string;
  urgent?: boolean;
}> = ({ title, description, link, type, urgent = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${urgent ? 'border-l-4 border-red-500' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          urgent ? 'bg-red-100 text-red-800' : 'bg-gradient-to-r from-pink-100 to-green-100 text-gray-800'
        }`}>
          {type}
        </span>
        {urgent && <span className="text-red-500 text-sm font-bold">24/7</span>}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-4 py-2 font-semibold rounded-full transition-all ${
          urgent 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-gradient-to-r from-pink-500 to-green-400 text-white hover:from-pink-600 hover:to-green-500'
        }`}
      >
        {urgent ? 'Get Help Now' : 'Learn More'} →
      </a>
    </div>
  );
};

const Resources: React.FC = () => {
  const crisisResources = [
    {
      title: "The Trevor Project",
      description: "24/7 crisis support and suicide prevention for LGBTQ+ youth. Call, text, or chat online.",
      link: "https://www.thetrevorproject.org/",
      type: "Crisis Support",
      urgent: true
    },
    {
      title: "LGBT National Youth Talkline",
      description: "Peer support for LGBTQ+ youth up to age 25. Safe space to talk about anything.",
      link: "https://www.lgbthotline.org/national-youth-talkline",
      type: "Crisis Support",
      urgent: true
    },
    {
      title: "Trans Lifeline",
      description: "Crisis hotline staffed by transgender people for transgender people.",
      link: "https://translifeline.org/",
      type: "Crisis Support",
      urgent: true
    }
  ];

  const mentalHealthResources = [
    {
      title: "PFLAG",
      description: "Support, education, and advocacy for LGBTQ+ people and their families.",
      link: "https://pflag.org/",
      type: "Family Support"
    },
    {
      title: "It Gets Better Project",
      description: "Stories and resources showing LGBTQ+ youth that life gets better.",
      link: "https://itgetsbetter.org/",
      type: "Inspiration"
    },
    {
      title: "GLAAD",
      description: "Media advocacy and resources for understanding LGBTQ+ issues.",
      link: "https://www.glaad.org/",
      type: "Education"
    }
  ];

  const practicalResources = [
    {
      title: "True Colors United",
      description: "Resources for LGBTQ+ youth experiencing homelessness.",
      link: "https://truecolorsunited.org/",
      type: "Housing"
    },
    {
      title: "Point of Pride",
      description: "Financial assistance for transgender people seeking healthcare.",
      link: "https://www.pointofpride.org/",
      type: "Healthcare"
    },
    {
      title: "Campus Pride",
      description: "Resources for LGBTQ+ students in college and high school.",
      link: "https://www.campuspride.org/",
      type: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-green-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resources & Support
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            You're not alone. Here are trusted resources, hotlines, and organizations 
            that have your back, no matter what you're going through.
          </p>
        </div>
      </div>

      {/* Crisis Resources - Priority Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚨 Need Help Right Now?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you're in crisis or need someone to talk to immediately, these resources are available 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {crisisResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>

      {/* Mental Health & Support */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💚 Mental Health & Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations focused on mental health, family support, and building community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentalHealthResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>

      {/* Practical Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🛠️ Practical Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world help with housing, healthcare, education, and other life needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practicalResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Support */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Remember: You Matter
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your identity is valid. Your feelings are valid. Your story matters. 
            If you don't see what you need here, reach out — we're here to help you find it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-green-400 text-white font-semibold rounded-full hover:from-pink-600 hover:to-green-500 transition-all text-lg"
            >
              Read Our Blog
            </Link>
            <Link 
              to="/community"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all text-lg"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
