import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../home/Home.css';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  information: string;
  images: string[];
  githubButton?: boolean;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, information, images, githubButton, githubLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const intervalId = useRef<number | null>(null);

  const startInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = window.setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [images]);

  return (
    <div className='project-card flex flex-row gap-8'>
      <div className='flex flex-col justify-center content-center'>
        <div className="carousel">
              <div className="carousel-images h-5/6">
                <img
                  className="carousel-image"
                  src={images[currentImageIndex]}
                  width={300} height={300}
                />
              </div>
              <div className="carousel-indicators h-1/6">
                {images.map((_image, index) => (
                  <span
                    key={index}
                    className={`carousel-bubble ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      startInterval();
                    }}
                  />
                ))}
              </div>
            </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        <div className='project-card-information mt-4'>
            <p>{information}</p>
        </div>
       <div className='ml-auto mr-auto mt-8 home-container-github'>
       {githubButton && githubLink ? (
          <a href={githubLink} target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon icon={faGithub} size='3x' />
          </a>
        ) : null}
       </div>
      </div>
    </div>
  );
};

export default ProjectCard;