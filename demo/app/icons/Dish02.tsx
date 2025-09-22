import React from 'react';
import type { IconProps } from '../types';

const Dish02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 17a5 5 0 0 1 0-10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21a9 9 0 1 1 0-18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3v5m0 13V11M3.5 8h5M9 3v4.352c0 4.864-6 4.864-6 0V3"/> </svg>
  );
};

export default Dish02;
