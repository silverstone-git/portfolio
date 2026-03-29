import { useState, useEffect } from 'react';
import { StarField } from './StarField';
import { CelestialObjects } from './CelestialObjects';

export function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <StarField scrollY={scrollY} />
      <CelestialObjects scrollY={scrollY} />
    </>
  );
}
