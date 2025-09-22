import React from 'react';
import type { IconProps } from '../types';

const Asteroid02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM7 13l7.5-7.5M18 2l-1.5 1.5M22 6l-3 3m-8 7 3-3"/> </svg>
  );
};

export default Asteroid02;
