import React from 'react';
import type { IconProps } from '../types';

const Sushi02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 9a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 2 7.537 16.412M6 22l.825-3M22 12.5 2 18"/> </svg>
  );
};

export default Sushi02;
