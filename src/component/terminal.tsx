// Import Swiper and required components
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import View from "@/assites/view.png";
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Chris',
    role: 'President and CEO, PrintReach, USA',
    image: '/Users/abhijeetkumar/Desktop/Abhijeet/apple/Nextjsproject/my-app/src/assites/view.png',
    rating: 4.5,
  },
  {
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Jane Doe',
    role: 'Marketing Director, TechCorp, UK',
    image: '/path-to-image2.jpg',
    rating: 5,
  },
  {
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'John Smith',
    role: 'Founder, InnovateX, Germany',
    image: '/path-to-image3.jpg',
    rating: 4,
  },
];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-8">
        What people say about us
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <div className="text-yellow-500 flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${
                      i + 0.5 <= testimonial.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;