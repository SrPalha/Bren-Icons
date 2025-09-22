import React from 'react';
import type { IconProps } from '../types';

const Parabola01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 3c0 8.284-4.03 15-9 15S3 11.284 3 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h1.059m11.647 0h1.059m3.176 0H21M7.235 21h1.06m3.176 0h1.058"/> </svg>
  );
};

export default Parabola01;
