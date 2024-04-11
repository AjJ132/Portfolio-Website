import React, { useEffect, useRef } from 'react';
import './Home.css';

interface HeroDynamicShadowProps {
    src: string;
    backgroundImages: string[];
}

const HeroDynamicShadow: React.FC<HeroDynamicShadowProps> = ({ src, backgroundImages }) => {
    const shadowRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const intervals = backgroundImages.map((_, index) => {
            const updateStyle = () => {
                const ref = shadowRefs.current[index];
                if (ref) {
                    ref.style.opacity = (Math.random() * 0.6 + 0.4).toString();
                    ref.style.transform = `translate(-50%, -50%) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 20 - 10}deg)`;
                }
            };

            // Set an individual interval for each image
            return setInterval(updateStyle, 1500 + Math.random() * 500); // Randomize to make motion more fluid
        });

        return () => intervals.forEach(clearInterval); // Cleanup intervals on unmount
    }, [backgroundImages.length]);

    return (
        <div className="image-container">
            {backgroundImages.map((imageSrc, index) => (
                <img
                    key={index}
                    ref={el => (shadowRefs.current[index] = el)}
                    src={imageSrc}
                    alt={`Background ${index}`}
                    className={`blurred-shadow bg-${index}`}
                />
            ))}
            <img src={src} alt="Original" className="original-image" />
            {/* <img src={Test1} alt="Original" /> */}
        </div>
    );
};

export default HeroDynamicShadow;
