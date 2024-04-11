import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './About.css'

interface AboutCardProps {
    title: string;
    subtitle: string;
    content: string;
    icon: IconProp;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, subtitle, content, icon }) => {
    return (
        <div className='about-card'>
            <div className='about-card-icon'>
                <FontAwesomeIcon icon={icon} size='2xl'/>
            </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
        </div>
    );
};

export default AboutCard;