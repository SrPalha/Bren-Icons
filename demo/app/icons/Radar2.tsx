import React from 'react';
import type { IconProps } from '../types';

const Radar2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12a6 6 0 1 1-3.378-5.398c.713.346 1.07.52 1.154 1.028.086.508-.259.853-.948 1.542L12 12"/> </svg>
  );
};

export default Radar2;
