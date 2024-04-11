

interface SkillsCarouselItemProps {
    skill: string;
    style: {
        transform: string;
        transition: string;
    };
}

export default function SkillsCarouselItem({skill, style }: SkillsCarouselItemProps) {
    return (
        <div className="carousel-card" style={style}>
            <h2>{skill}</h2>
        </div>
    );
}