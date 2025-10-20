
import React from 'react';

// Import the new assets
// import Galaxy5 from '../assets/galaxy5_blue_ring.png';
// import Galaxy6 from '../assets/galaxy6_spiral-4-arm.png';


interface CelestialObjectsProps {
  scrollY: number;
}

export const CelestialObjects: React.FC<CelestialObjectsProps> = ({ scrollY }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Replace the divs with img tags using the imported assets */}
      
      <img
        src="/images/galaxy1_red.png"
        alt="Red galaxy"
        className="absolute w-32 h-32 opacity-70"
        style={{ 
          top: '15%', 
          left: '10%', 
          transform: `translateY(-${scrollY * 0.05}px) rotate(15deg)` 
        }}
      />
      
      <img
        src="/images/galaxy2_spiral_plane.png"
        alt="Spiral plane galaxy"
        className="absolute w-48 h-24 opacity-60"
        style={{ 
          top: '40%', 
          left: '80%', 
          transform: `translateY(-${scrollY * 0.03}px) rotate(-25deg)` 
        }}
      />

      <img
        src="/images/galaxy3_edge_blue.png"
        alt="Blue edge galaxy"
        className="absolute w-40 h-20 opacity-80"
        style={{ 
          top: '75%', 
          left: '15%',
          transform: `translateY(-${scrollY * 0.06}px)`
        }}
      />

       <img
        src="/images/galaxy4_purple_edge.png"
        alt="Purple edge galaxy"
        className="absolute w-36 h-36 opacity-70"
        style={{ 
          top: '85%', 
          left: '70%',
          transform: `translateY(-${scrollY * 0.02}px) rotate(20deg)`
        }}
      />

      <img
        src="/images/black_hole.png"
        alt="Black hole"
	width="200px"
	height="200px"
        className="absolute opacity-80"
        style={{ 
          top: '60%', 
          left: '40%',
          transform: `translateY(-${scrollY * 0.04}px)`
        }}
      />

      <img
        src="/images/galaxy7_spiral-slant.png"
        alt="Slanted spiral galaxy"
        className="absolute w-20 h-20 opacity-60"
        style={{ 
          top: '10%', 
          left: '65%',
          transform: `translateY(-${scrollY * 0.07}px) rotate(-10deg)`
        }}
      />
    </div>
  );
};
