import React, { useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';  // Import the Vanta Waves effect
import * as THREE from 'three';  // Import Three.js as it's required by Vanta.js

const VantaWavesBackground = () => {
  const vantaRef = useRef(null);  // Create a reference for the Vanta background

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = WAVES({
        el: vantaRef.current,  // Apply the effect to the div with this reference
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x16161a,  // Set the color
        THREE,  // Include Three.js for Vanta
      });

      // Cleanup on component unmount
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    >
      {/* Vanta background */}
    </div>
  );
};

export default VantaWavesBackground;
