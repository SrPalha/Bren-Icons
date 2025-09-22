import React from 'react';
import type { IconProps } from '../types';

const Dna01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.667 22c.534-.534 1.068-1.068.574-4m-.574-2.666C7.334 10 8.334 9 8.667 8.667c.333-.333 1.333-1.333 6.667 0m-6.667 6.667c-5.333-1.334-6-.668-6.667-.001m6.667 0c5.333 1.334 6.333.333 6.666 0 .333-.333 1.334-1.333 0-6.666m0 0c5.334 1.333 6 .667 6.667 0M15.333 2c-.534.534-1.068 1.068-.574 4"/> </svg>
  );
};

export default Dna01;
