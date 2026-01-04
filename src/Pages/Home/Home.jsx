import React from 'react';
import LatestBooks from '../../Components/LatestBooks/LatestBooks';
import Banner from '../../Components/Banner/Banner';
import { FaAward, FaHeadset, FaRocket, FaGlobe } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="space-y-24 pb-20 bg-gray-50/30">
      
      <Banner />

      <section className="relative w-11/12 mx-auto -mt-20 z-10">
        <div className="text-center mb-6 md:hidden">
            <h2 className="text-xl font-bold text-gray-800 italic">Our Milestone</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-indigo-50 transition-colors group">
            <div className="text-5xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">1,200+</div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Books Added</div>
            <div className="mt-2 text-[10px] text-indigo-300 italic uppercase">Trusted Library</div>
          </div>
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-indigo-50 transition-colors group">
            <div className="text-5xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">45k+</div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Active Readers</div>
            <div className="mt-2 text-[10px] text-indigo-300 italic uppercase">Global Community</div>
          </div>
          <div className="p-10 text-center hover:bg-indigo-50 transition-colors group">
            <div className="text-5xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Publishers</div>
            <div className="mt-2 text-[10px] text-indigo-300 italic uppercase">Trusted Partners</div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-2 uppercase tracking-tight">Why Book Haven?</h2>
          <p className="text-gray-500 font-medium">Exceptional features tailored for every book enthusiast</p>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <FaRocket />, title: "Fast Discovery", desc: "Find your next read in seconds" },
            { icon: <FaGlobe />, title: "Global Access", desc: "Read from anywhere in the world" },
            { icon: <FaAward />, title: "Premium Quality", desc: "Handpicked books for you" },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Always here to guide you" }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 bg-white shadow-sm rounded-2xl border border-gray-100 hover:shadow-xl transition-all text-center">
              <div className="text-3xl text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
          <div className="text-center mb-[-40px]">
            <h2 className="text-4xl font-black text-gray-800 mb-2 uppercase tracking-tight">Newly Added Books</h2>
            <p className="text-gray-500 font-medium">Explore the freshest stories in our collection</p>
          </div>
          <LatestBooks />
      </section>
      <section className='w-11/12 mx-auto'>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-2 uppercase tracking-tight">Explore Top Genres</h2>
          <p className="text-gray-500 font-medium">Dive into your favorite categories</p>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Fiction", img: "https://i.ibb.co.com/LD5s9mw7/0f387215-8a51-4142-adb1-4d05c82a1fc2-sized-1000x1000.jpg" },
            { name: "Science", img: "https://i.ibb.co.com/jvBL5x9Q/BPS-GOALS-LANDSCAPE-PPT-NO-TEXT.jpg" },
            { name: "History", img: "https://i.ibb.co.com/PzWdspT7/Acellus-World-History-720x388.jpg" }
          ].map((genre, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">
              <img src={genre.img} alt={genre.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h3 className="text-white text-3xl font-bold">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-600 py-20 text-white overflow-hidden rounded-[3rem] w-11/12 mx-auto shadow-2xl">
        <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <span className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Editor's Highlight</span>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">Featured Reading: <br /> The Great Adventure</h2>
            <p className="text-indigo-100 text-lg leading-relaxed font-light italic">
              "This thrilling story takes you on a journey of courage, friendship, and discovery. A must-read for adventure lovers who seek meaning in every page!"
            </p>
            <div className="flex items-center gap-4 bg-indigo-700/40 p-4 rounded-2xl w-fit border border-indigo-400/20">
              <div className="avatar">
                <div className="w-14 rounded-full ring ring-yellow-400 ring-offset-2">
                  <img src="https://i.pravatar.cc/150?u=john" alt="Author" />
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">John Smith</p>
                <p className="text-xs text-yellow-400 uppercase font-bold tracking-tighter">Best Selling Author</p>
              </div>
            </div>
            <button className="btn btn-warning btn-lg hover:scale-105 transition-transform border-none px-10 rounded-2xl font-bold">Start Reading Now</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://i.ibb.co.com/H03z4dV/unnamed.jpg" alt="Book" className="w-80 md:w-96 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rotate-6 hover:rotate-0 transition-all duration-700 border-8 border-white/10" />
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Voices of Our Readers</h2>
          <p className="text-gray-500 font-medium">Stories and feedback from our global community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Sarah Jenkins", role: "Professor", img: "https://i.pravatar.cc/150?u=sarah", text: "Book Haven has completely changed my reading habit. The collection is vast!" },
            { name: "Alex Rodriguez", role: "Developer", img: "https://i.pravatar.cc/150?u=alex", text: "I love contributing book summaries. The community here is very supportive." },
            { name: "Emma Watson", role: "Avid Reader", img: "https://i.pravatar.cc/150?u=emma", text: "Dark mode support and easy filtering makes browsing a real pleasure here!" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-50 relative group hover:-translate-y-3 transition-all duration-500">
              <div className="text-6xl text-indigo-100 absolute top-5 right-8 group-hover:text-indigo-200 transition-colors">“</div>
              <p className="text-gray-600 italic mb-8 relative z-10 font-medium">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full border-2 border-indigo-600 p-1" src={item.img} alt={item.name} />
                <div><h4 className="font-bold text-gray-800">{item.name}</h4><p className="text-xs text-indigo-500 font-bold uppercase">{item.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-3/4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Need Help?</h2>
          <p className="text-gray-500 font-medium">Quick answers to frequently asked questions</p>
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-white shadow-md rounded-2xl border border-gray-100 p-2">
            <input type="radio" name="my-accordion-3" defaultChecked /> 
            <div className="collapse-title text-xl font-bold text-indigo-600 uppercase tracking-tighter">How do I add a new book?</div>
            <div className="collapse-content text-gray-500 font-medium"><p>Log in, go to your Dashboard, and select the "Add New Book" menu to share a book with the community.</p></div>
          </div>
          <div className="collapse collapse-plus bg-white shadow-md rounded-2xl border border-gray-100 p-2">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-bold text-indigo-600 uppercase tracking-tighter">Can I update book details later?</div>
            <div className="collapse-content text-gray-500 font-medium"><p>Yes, from your "My Books" list in the dashboard, you can edit or delete any book you added.</p></div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px]"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Stay in the Loop</h2>
          <p className="text-gray-400 mb-10 text-lg">Subscribe to get the latest updates on new books, author interviews, and monthly reading lists.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="Your Email Address" className="input input-bordered h-16 w-full md:w-96 rounded-2xl text-black font-bold focus:ring-4 focus:ring-indigo-500 outline-none" />
            <button className="btn btn-primary h-16 px-12 rounded-2xl bg-indigo-600 border-none text-lg hover:bg-indigo-700 transition-colors">Subscribe Now</button>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto text-center py-10 border-t border-gray-100">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Follow Our Library Journey</p>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 text-xl font-black text-gray-300">
            <a href="#" className="hover:text-indigo-600 transition-all hover:scale-110">FACEBOOK</a>
            <a href="#" className="hover:text-indigo-600 transition-all hover:scale-110">TWITTER</a>
            <a href="#" className="hover:text-indigo-600 transition-all hover:scale-110">INSTAGRAM</a>
            <a href="#" className="hover:text-indigo-600 transition-all hover:scale-110">LINKEDIN</a>
        </div>
      </section>

    </div>
  );
};

export default Home;