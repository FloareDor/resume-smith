import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from './testimonialCard';
import { Element } from 'react-scroll';

const testimonials = [
  {
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    author: 'Austin Distel',
    role: 'Product Designer, Google',
	},
	{
		quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		author: 'Austin Distel',
		role: 'Product Designer, Yahoo',
	},
	{
		quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		author: 'Austin Distel',
		role: 'Product Designer, Blizzard',
	  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        containerRef.current.scrollLeft = currentIndex * containerWidth;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

	return (
	  
		<Element name='testimonials'>
			<div className="bg-white pt-20 pb-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our customers say it best</h2>
					<div className="relative">
					<button
						className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white opacity-75 hover:opacity-100 rounded-full p-2 shadow-md z-10  transition-colors duration-300"
						onClick={handlePrev}
					>
						<svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<div className="flex overflow-x-hidden" ref={containerRef}>
						{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="w-full flex-shrink-0"
							style={{ width: `${containerRef.current?.offsetWidth}px` }}
						>
							<TestimonialCard
							quote={testimonial.quote}
							author={testimonial.author}
							role={testimonial.role}
							/>
						</div>
						))}
					</div>
					<button
						className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white opacity-75 hover:opacity-100 rounded-full p-2 shadow-md z-10  transition-colors duration-300"
						onClick={handleNext}
					>
						<svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
					</div>
				</div>
			</div>
		</Element>
  );
};

export default Testimonials;