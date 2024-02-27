import React, { useEffect, useRef } from 'react';
import './Navbar.css'; // Make sure to import your CSS stylesheet

interface HeroDynamicShadowProps {
    src: string; // Image source URL
    backgroundImages: string[]; // Array of background image source URLs
}

const HeroDynamicShadow: React.FC<HeroDynamicShadowProps> = ({ src, backgroundImages }) => {
    const shadowRefs = useRef<any[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            shadowRefs.current.forEach((ref, index) => {
                if (ref) {
                    ref.style.opacity = (Math.random() * 0.6 + 0.4).toString();
                    ref.style.transform = `translate(-50%, -50%) translate(${Math.random() * 40 - 5}px, ${Math.random() * 40 - 5}px) rotate(${Math.random() * 20 - 5}deg)`;
                }
            });
        }, 1500); // Every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="image-container">
            {backgroundImages.map((imageSrc, index) => (
                <img
                    key={index}
                    ref={el => shadowRefs.current[index] = el}
                    src={imageSrc}
                    alt={`Background ${index}`}
                    className={`blurred-shadow bg-${index}`}
                />
            ))}
            <img src={src} alt="Original" className="original-image" />
        </div>
    );
};

export default HeroDynamicShadow;
