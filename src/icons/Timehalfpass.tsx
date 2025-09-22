import React from 'react';
import type { IconProps } from '../types';

const Timehalfpass: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.77 2.5c-.273.097-.54.205-.8.324M5.425 4.466a10.27 10.27 0 0 0-.652.624M3.032 7.565c-.186.373-.349.76-.487 1.157m-.529 2.67c-.022.389-.021.786.002 1.175m.55 2.699c.133.374.288.737.464 1.09m1.659 2.387c.244.262.502.51.773.746m2.312 1.517A10.4 10.4 0 0 0 9 21.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3V16m0-5.5V6"/> </svg>
  );
};

export default Timehalfpass;
