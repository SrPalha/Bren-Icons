import React from 'react';
import type { IconProps } from '../types';

const Cone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21 18c0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4 9-1.79 9-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m20.5 16.5-4.344-9.106C14.343 3.798 13.436 2 12 2c-1.436 0-2.343 1.798-4.156 5.394L3.5 16.5"/> </svg>
  );
};

export default Cone01;
