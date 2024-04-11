import React, { useState } from 'react';
import './Projects.css';

interface CarouselProps {
  elements: JSX.Element[]; // Array of HTML/JSX elements
}

const ProjectsCarousel: React.FC<CarouselProps> = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + elements.length) % elements.length);
  };

  return (
    <div className='project-carousel w-full h-full'>
      <div className="flex flex-row w-full content-center justify-center">
        {elements[currentIndex]}
      </div>
      
      <div className='flex flex-row gap-4 w-full content-center justify-center mt-8'>
        <button onClick={goToPrev}>Prev</button>
        <div className="carousel-indicators">
        {elements.map((_, index) => (
          <span
            key={index}
            className={`carousel-bubble-large ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
