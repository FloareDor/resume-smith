import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 lg:px-24 lg:py-12 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4 text-center">{quote}</p>
      <div className="flex items-center justify-center">
        <div>
          <h4 className="text-lg text-black font-semibold text-center">{author}</h4>
          <p className="text-gray-600 text-center">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;