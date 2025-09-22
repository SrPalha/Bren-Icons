import React from 'react';
import type { IconProps } from '../types';

const Chair04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 13.5 6 22m10-8.5 2 8.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 13c-1.732.622-4.008 1-6.5 1s-4.768-.378-6.5-1M19 2c-1.866.622-4.316 1-7 1s-5.134-.378-7-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14V3M8 13.5 7 3m9 10.5L17 3M7 18h10"/> </svg>
  );
};

export default Chair04;
