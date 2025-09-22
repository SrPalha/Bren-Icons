import React from 'react';
import type { IconProps } from '../types';

const Comingsoon01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 16H3a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H2m6.5-5h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm5.5 0h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm8 0v5l-3.5-5v5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 8A5 5 0 1 0 7 8a5 5 0 0 0 10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 8.5 12 8V5.5"/> </svg>
  );
};

export default Comingsoon01;
