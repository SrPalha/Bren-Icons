import React from 'react';
import type { IconProps } from '../types';

const Spaceship: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a6.02 6.02 0 0 0-5.923 4.9c-.086.466-.13.699.032 1.005.161.307.39.409.847.613 1.38.614 3.134.982 5.044.982 1.91 0 3.665-.368 5.044-.982.457-.204.686-.306.847-.613.162-.306.118-.54.032-1.005A6.02 6.02 0 0 0 12 3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 5.5c2.989.788 5 2.26 5 3.945C22 11.961 17.523 14 12 14S2 11.96 2 9.445C2 7.76 4.011 6.288 7 5.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18v3m5-4 1 4M7 17l-1 4"/> </svg>
  );
};

export default Spaceship;
