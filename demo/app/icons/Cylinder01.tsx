import React from 'react';
import type { IconProps } from '../types';

const Cylinder01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20 5.5C20 7.433 16.418 9 12 9S4 7.433 4 5.5 7.582 2 12 2s8 1.567 8 3.5Zm0 13c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5S7.582 15 12 15s8 1.567 8 3.5Zm0 0v-13m-16 13v-13"/> </svg>
  );
};

export default Cylinder01;
