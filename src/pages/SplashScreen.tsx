import { useEffect, useState } from 'react';
import './SplashScreen.css'; // Make sure to update the CSS file with the new styles

const SplashScreen = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000),
      setTimeout(() => setStage(2), 2250),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => setStage(4), 2600),
      setTimeout(() => setStage(5), 3100), // New stage to trigger backdrop fade out
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  if (stage === 5) {
    return null; // Ensure component does not render anything after complete fade out
  }

  return (
    <div className={`splash-screen ${stage === 4 ? 'backdrop-fade-out' : ''}`}>
      <h2 className={stage >= 1 ? 'fade-out' : ''}>AJ Johnson</h2>
      <h2 className={stage >= 3 ? 'fade-out' : ''}> | </h2>
      <h1 className={stage >= 2 ? 'fade-out' : ''}>Software Engineer</h1>
    </div>
  );
};

export default SplashScreen;
