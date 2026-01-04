import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Swal from 'sweetalert2'; // আপনি যেহেতু ইনস্টল করেছেন, এটি সাবমিট কনফার্মেশনের জন্য ব্যবহার করছি

const Contact = () => {
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // SweetAlert দিয়ে একটি সুন্দর মেসেজ দেখানো
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. We will get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#4f46e5',
      confirmButtonText: 'Great!'
    });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-16">
      <div className="w-11/12 mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4 tracking-tight">Contact Us</h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto italic">
            "A library is not a luxury but one of the necessities of life." Have a question? We are here to help.
          </p>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards (Left Side) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Call Anytime</p>
                <p className="text-lg font-bold text-gray-800">+880 1234 567 890</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Email Us</p>
                <p className="text-lg font-bold text-gray-800">hello@bookhaven.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Visit Us</p>
                <p className="text-lg font-bold text-gray-800">Tangail, Dhaka, BD</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
              <p className="font-bold mb-6 text-center">Follow our Journey</p>
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all"><FaFacebookF /></button>
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all"><FaTwitter /></button>
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all"><FaLinkedinIn /></button>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label font-bold text-gray-600 text-xs uppercase">Full Name</label>
                    <input type="text" placeholder="John Doe" className="input input-bordered w-full rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-600" required />
                  </div>
                  <div className="form-control">
                    <label className="label font-bold text-gray-600 text-xs uppercase">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-600" required />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-bold text-gray-600 text-xs uppercase">Subject</label>
                  <input type="text" placeholder="How can we help?" className="input input-bordered w-full rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-600" />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-gray-600 text-xs uppercase">Message</label>
                  <textarea placeholder="Type your message here..." className="textarea textarea-bordered w-full h-40 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-600" required></textarea>
                </div>
                <button type="submit" className="btn btn-block bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl h-14 text-lg shadow-lg shadow-indigo-200">
                  Send Message
                </button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;