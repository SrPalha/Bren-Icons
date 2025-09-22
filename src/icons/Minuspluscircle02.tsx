import React from 'react';
import type { IconProps } from '../types';

const Minuspluscircle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 8-8 8m6.5 0v-1.5m0 0V13m0 1.5H13m1.5 0H16m-8-5h3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Minuspluscircle02;
