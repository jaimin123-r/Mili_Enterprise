import { useEffect, useRef, useState } from 'react';

const ReviewSlider = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Rakesh Patel",
      company: "Bharat Industries",
      text: "Fabrication World delivered exceptional quality on our industrial project. Their attention to detail and precision in metal fabrication was outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sanjay Mehta",
      company: "Sunrise Manufacturing",
      text: "We've been working with Fabrication World for over 3 years now. Their consistency, reliability and quality of work is unmatched in the industry.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      company: "Innovative Solutions",
      text: "Their team went above and beyond to meet our tight deadline. The welding quality was excellent and the project was completed on time.",
      rating: 4,
    },
    {
      id: 4,
      name: "Vijay Singh",
      company: "Global Tech",
      text: "Fabrication World provided us with custom sheet metal components that perfectly matched our specifications. Highly recommended!",
      rating: 5,
    },
    {
      id: 5,
      name: "Kavita Desai",
      company: "Modern Interiors",
      text: "Great experience working with the team. They helped us create custom metal fixtures for our interior design project with excellent craftsmanship.",
      rating: 4,
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Auto scroll animation
    const interval = setInterval(() => {
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        setScrollPosition(0);
      } else {
        setScrollPosition(prev => prev + 1);
      }
    }, 20);

    // Update actual scroll position
    scrollContainer.scrollLeft = scrollPosition;

    return () => clearInterval(interval);
  }, [scrollPosition]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`text-${index < rating ? 'yellow' : 'gray'}-400`}>★</span>
    ));
  };

  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="title-section">What Our Clients Say</h2>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-gray-50 p-6 rounded-lg shadow-sm min-w-[300px] md:min-w-[350px] flex-shrink-0"
              >
                <div className="text-yellow-400 mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-600 text-sm">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;