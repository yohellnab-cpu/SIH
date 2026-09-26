import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  {
    title: "Education & Literacy",
    desc: "Empowering rural education, digital literacy, and essential school infrastructure for the next generation.",
    image: "/assets/images/carousel_0.jpg",
    storyId: 1
  },
  {
    title: "Public Infrastructure",
    desc: "Upgrading community facilities, smart mobility, and civic infrastructure across the state.",
    image: "/assets/images/carousel_1.jpg",
    storyId: 2
  },
  {
    title: "Water Resources",
    desc: "Ensuring clean, accessible drinking water and sustainable irrigation for all communities.",
    image: "/assets/images/carousel_2.jpg",
    storyId: 3
  },
  {
    title: "Women Empowerment",
    desc: "Fostering women's leadership, financial independence, and sustainable rural livelihoods.",
    image: "/assets/images/carousel_3.jpg",
    storyId: 4
  }
];

export default function ThematicCarousel({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide(prev => (prev === carouselData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? carouselData.length - 1 : prev - 1));

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-sm shadow-sm group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 relative h-[300px] md:h-[400px] cursor-pointer"
            onClick={() => onNavigate && onNavigate(`/success-stories/${slide.storyId}`)}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white drop-shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                {slide.title}
              </h3>
              <p className="text-sm md:text-base text-gray-100 font-medium max-w-2xl mb-4" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                {slide.desc}
              </p>
              <button 
                className="bg-accent hover:bg-[#e55a10] text-white font-bold text-xs uppercase tracking-wider px-6 py-2 transition-colors shadow-md"
              >
                View Story &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent w-6' : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
