import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "The Ultimate Library For Book Lovers",
      description: "Dive into a world of endless stories. Discover hidden gems curated just for you.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000",
    },
    {
      id: 2,
      title: "Your Story Starts From Here",
      description: "Share your own writings with a global community. Join our digital haven.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000",
    },
    {
      id: 3,
      title: "Empower Your Knowledge Every Day",
      description: "Explore our vast collection of educational resources and non-fiction masterpieces.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000",
    }
  ];

  return (
    <div className="w-full mx-auto rounded-3xl overflow-hidden shadow-2xl mt-8 border-4 border-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.description}</p>
                <div className="flex gap-4">
                  <Link to="/allBooks" className="btn btn-primary btn-lg">Browse All</Link>
                </div>
              </div>

              {/* Visual Hint for Scroll (Requirement 2) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-1 h-12 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;