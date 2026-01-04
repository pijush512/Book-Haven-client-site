import React from 'react';
import { FaBookOpen, FaUsers, FaGlobe, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section for About Page */}
      <section className="relative py-20 bg-indigo-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
            <path d="M0 0 L100 0 L100 100 L0 100 Z"></path>
          </svg>
        </div>
        <div className="relative z-10 w-11/12 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light">
            Building a bridge between timeless literature and the digital age. We believe every book has a soul and every reader deserves a haven.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision (Requirement: Content with Image) */}
      <section className="py-24 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000" 
            alt="Library" 
            className="rounded-[3rem] shadow-2xl z-10 relative"
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-full -z-0 opacity-20 blur-3xl"></div>
        </div>
        <div className="space-y-6">
          <span className="text-indigo-600 font-black uppercase tracking-widest">Our Mission</span>
          <h2 className="text-4xl font-bold text-gray-800">Empowering Readers Worldwide</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Book Haven started with a simple idea: making books accessible to everyone, everywhere. We aim to create a community where authors and readers can interact, share reviews, and discover their next favorite story seamlessly.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600"><FaBookOpen /></div>
              <span className="font-bold">1M+ Books</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><FaGlobe /></div>
              <span className="font-bold">Global Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Icon Based Section) */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-800">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-4">Strong Community</h3>
              <p className="text-gray-500">Connect with thousands of bibliophiles and share your thoughts on the latest releases.</p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-3xl mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold mb-4">Curated Quality</h3>
              <p className="text-gray-500">Every book in our collection is handpicked to ensure the best reading experience for you.</p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 text-3xl mx-auto mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all">
                <FaBookOpen />
              </div>
              <h3 className="text-xl font-bold mb-4">Easy Management</h3>
              <p className="text-gray-500">Track your reading progress and manage your personal library with just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Join Us CTA Section */}
      <section className="py-20 w-11/12 mx-auto">
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">Join thousands of readers and start exploring your favorite books today. Registration is free and takes less than a minute.</p>
            <button className="btn btn-primary btn-lg rounded-2xl px-12 bg-indigo-600 border-none shadow-2xl hover:bg-indigo-700">Get Started Now</button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default About;