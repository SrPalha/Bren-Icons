import React from 'react';
import type { IconProps } from '../types';

const Leftangle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 5c-.393-.405-1.44-2-2-2s-1.607 1.595-2 2M5 17c-.405.393-2 1.44-2 2s1.595 1.607 2 2m14-9h-1c-2.828 0-4.243 0-5.121.879C12 13.757 12 15.172 12 18v1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 19h10c2.828 0 4.243 0 5.121-.852.879-.852.879-2.223.879-4.966V3"/> </svg>
  );
};

export default Leftangle;
