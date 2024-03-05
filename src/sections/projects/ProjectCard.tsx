import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  information: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, information, image }) => {
  return (
    <div className='project-card flex flex-row gap-8'>
      <div className='flex flex-col justify-center content-center p-4'>
        <img src={image} alt={title} width={300} height={300}/>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        <div className='project-card-information mt-4'>
            <p>{information}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;