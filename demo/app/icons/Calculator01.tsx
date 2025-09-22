import React from 'react';
import type { IconProps } from '../types';

const Calculator01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 6h2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21 13v-2c0-4.243 0-6.364-1.318-7.682C18.364 2 16.242 2 12 2 7.757 2 5.636 2 4.318 3.318 3 4.636 3 6.758 3 11v2c0 4.243 0 6.364 1.318 7.682C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.318C21 19.364 21 17.242 21 13Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 14h.526m4.21 0h.527m4.21 0H17M7 18h.526m4.21 0h.527m4.21 0H17"/> </svg>
  );
};

export default Calculator01;
