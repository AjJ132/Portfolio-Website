import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import './About.css';

interface SkillsCarouselProps {
    items: string[];
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalItems = items.length;
    const lastIndex = totalItems - 1;

    if (currentIndex > lastIndex) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex, items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            skill={item}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: currentIndex > items.length - 1 ? 'none' : 'transform 0.5s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;