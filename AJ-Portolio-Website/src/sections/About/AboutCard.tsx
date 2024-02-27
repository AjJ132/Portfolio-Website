import React from 'react';
import './About.css'

interface AboutCardProps {
    title: string;
    subtitle: string;
    content: string;
    icon: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, subtitle, content, icon }) => {
    return (
        <div className='about-card'>
            <div className='about-card-icon'>
                <img src={icon} alt="Icon" />
            </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
        </div>
    );
};

export default AboutCard;