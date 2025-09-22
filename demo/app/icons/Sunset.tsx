import React from 'react';
import type { IconProps } from '../types';

const Sunset: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 7.5c.492.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.008-1.994 2.5-2.5M12 10V4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18.363 10.635-1.414 1.414M3 17h2m.637-6.365 1.414 1.414M21 17h-2m2 3H3m13-3a4 4 0 0 0-8 0"/> </svg>
  );
};

export default Sunset;
