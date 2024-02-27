import React from "react";

interface SkillsCarouselItemProps {
    skill: string;
}

export default function SkillsCarouselItem({skill }: SkillsCarouselItemProps) {
    return (
        <div className="carousel-card">
            {skill}
        </div>
    );
}