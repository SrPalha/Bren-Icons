import React from 'react';
import type { IconProps } from '../types';

const Easecurvecontrolpoints: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4c-5 0-7.02 4.042-9 8-1.98 3.958-4 8-9 8m7 0h2m3 0h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 4h2M7 4h2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Easecurvecontrolpoints;
