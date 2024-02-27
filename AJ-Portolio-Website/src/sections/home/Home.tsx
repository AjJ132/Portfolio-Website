import React from 'react';
import  ProfilePic  from '../../assets/Hero2.png';
import ProfilePicUnaffected from '../../assets/Hero2Alt.png';
import ProfilePicUnaffected2 from '../../assets/Hero2Alt2.png';
import ProfilePicUnaffected3 from '../../assets/Hero2Alt3.png';

import HeroDynamicShadow from '../../navbar/HeroDynamicShadow';

interface HomeProps {
    // Define your props here
    id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
    const backgroundImages = [
        ProfilePicUnaffected2,
        ProfilePicUnaffected3,
    ];
    return (
        <div id={id} className='section'>
           <div className='w-full h-full flex flex-row items-center justify-center'>
                <div>
                    <p>My info</p>
                </div>
                <div className="hero-image-container">
                    {/* <img src={ProfilePic} alt="My picture" /> */}
                    <HeroDynamicShadow src={ProfilePic} backgroundImages={backgroundImages} />
                </div>
           </div>
        </div>
    );
}

export default Home;