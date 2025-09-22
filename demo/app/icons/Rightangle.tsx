import React from 'react';
import type { IconProps } from '../types';

const Rightangle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5c.393-.405 1.44-2 2-2s1.607 1.595 2 2m12 12c.405.393 2 1.44 2 2s-1.595 1.607-2 2M5 12h1c2.828 0 4.243 0 5.121.879C12 13.757 12 15.172 12 18v1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 19H11c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13V3"/> </svg>
  );
};

export default Rightangle;
