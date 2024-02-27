import React, { useState, useEffect, useRef } from 'react';
import { cardDetails } from './CarouselConfig';
import CarouselItem from './CarouselItem';
import './About.css';

interface SkillsCarouselProps {
    items: string[];
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
            const detail = cardDetails[Number(detailKey)];
            return (
                <CarouselItem
                
                skill={detail.skill}
                ></CarouselItem>
            );
            })}
            {Object.keys(cardDetails).map((detailKey) => {
            const detail = cardDetails[Number(detailKey)];
            return (
                <CarouselItem
                
                skill={detail.skill}
                ></CarouselItem>
            );
            })}
      </div>
    </div>
  );
};

export default SkillsCarousel;
