import React from 'react';
import { FaBookReader, FaShippingFast, FaCloudDownloadAlt, FaHeadset, FaUserShield, FaHistory } from 'react-icons/fa';

const Services = () => {
  const allServices = [
    {
      id: 1,
      icon: <FaBookReader className="text-blue-500" />,
      title: "Book Lending",
      description: "Borrow your favorite physical books for up to 21 days with an easy renewal process through our portal.",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <FaCloudDownloadAlt className="text-purple-500" />,
      title: "Digital E-Books",
      description: "Access our vast collection of digital books and magazines anytime, anywhere on your preferred devices.",
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      icon: <FaShippingFast className="text-orange-500" />,
      title: "Home Delivery",
      description: "Too busy to visit? We deliver your requested books right to your doorstep within 24 hours.",
      bgColor: "bg-orange-50"
    },
    {
      id: 4,
      icon: <FaHistory className="text-emerald-500" />,
      title: "Reading History",
      description: "Keep track of every book you've read and get personalized recommendations based on your taste.",
      bgColor: "bg-emerald-50"
    },
    {
      id: 5,
      icon: <FaUserShield className="text-red-500" />,
      title: "Premium Membership",
      description: "Join our elite club for early access to new arrivals, exclusive author events, and zero late fees.",
      bgColor: "bg-red-50"
    },
    {
      id: 6,
      icon: <FaHeadset className="text-indigo-500" />,
      title: "24/7 Librarian Support",
      description: "Have trouble finding a book? Our expert librarians are available online to assist you anytime.",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="w-11/12 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm">What We Offer</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-6">Premium Services For <br /> Our Readers</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We go beyond just being a book collection. Discover the exclusive services that make Book Haven the ultimate destination for bibliophiles.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1.5 bg-indigo-600 rounded-full"></div>
            <div className="w-4 h-1.5 bg-indigo-200 rounded-full ml-2"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:bg-gray-900 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
              <div className="mt-8">
                <button className="text-indigo-600 font-bold flex items-center gap-2 group-hover:text-white transition-colors">
                  Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section (Adds to the 10 sections requirement) */}
        <div className="mt-28 bg-indigo-600 rounded-[3rem] p-12 md:p-20 flex flex-wrap justify-around items-center text-white gap-8">
           <div className="text-center">
              <h2 className="text-5xl font-black mb-2">98%</h2>
              <p className="text-indigo-100 uppercase tracking-widest text-sm font-bold">Happy Readers</p>
           </div>
           <div className="text-center">
              <h2 className="text-5xl font-black mb-2">24h</h2>
              <p className="text-indigo-100 uppercase tracking-widest text-sm font-bold">Fast Delivery</p>
           </div>
           <div className="text-center">
              <h2 className="text-5xl font-black mb-2">50k+</h2>
              <p className="text-indigo-100 uppercase tracking-widest text-sm font-bold">E-Books Available</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Services;