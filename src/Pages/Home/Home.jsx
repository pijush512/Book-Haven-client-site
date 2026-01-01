import React from 'react';
import LatestBooks from '../../Components/LatestBooks/LatestBooks';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  return (
    <div className=" py-12 px-6">
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <div className="space-y-12 p-6">
        {/* Top Genres */}
        <section className='p-10 w-11/12 mx-auto'>
          <h2 className="text-3xl font-bold text-center mb-4 mt-5 ">Top Genres </h2>
          <p className="text-center text-gray-600 mb-6">
            Explore our most popular book categories loved by readers worldwide!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="hover:-translate-y-4 transition-transform rounded-lg p-4 shadow-md hover:shadow-lg text-center ">
              <img
                src="https://i.ibb.co.com/LD5s9mw7/0f387215-8a51-4142-adb1-4d05c82a1fc2-sized-1000x1000.jpg"
                alt="Fiction"
                className="w-full h-50 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">Fiction</h3>
            </div>

            <div className="hover:-translate-y-4 transition-transform rounded-lg p-4 shadow hover:shadow-lg text-center">
              <img
                src="https://i.ibb.co.com/jvBL5x9Q/BPS-GOALS-LANDSCAPE-PPT-NO-TEXT.jpg"
                alt="Science"
                className="w-full h-50 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">Science</h3>
            </div>

            <div className="hover:-translate-y-4 transition-transform rounded-lg p-4 shadow hover:shadow-lg text-center">
              <img
                src="https://i.ibb.co.com/PzWdspT7/Acellus-World-History-720x388.jpg"
                alt="History"
                className="w-full h-50 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">History</h3>
            </div>
          </div>
        </section>
      </div>
      {/* Book of the Week */}
      <section className="bg-blue-50 p-6 rounded-lg shadow w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Book of the Week
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.ibb.co.com/H03z4dV/unnamed.jpg"
            alt="Book of the Week"
            className="w-full md:w-1/3 rounded-lg shadow"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">The Great Adventure</h3>
            <p className="text-gray-700 mt-2">
              This thrilling story takes you on a journey of courage,
              friendship, and discovery. A must-read for adventure lovers!
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Author: John Smith
            </p>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;