import React from 'react';
import type { IconProps } from '../types';

const Bitcointarget: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.5 12a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 2v3m10 7h-3m-7 7v3M5 12H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.437 12h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcointarget;
