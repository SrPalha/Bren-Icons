import React from 'react';
import type { IconProps } from '../types';

const Bridge: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7c.5 0 2-.5 3-2 1 1.5 3 4 6 4s5-2.5 6-4c1 1.5 2.5 2 3 2M6 4v16m-4-4h20M18 4v16M10 9v7m4-7v7"/> </svg>
  );
};

export default Bridge;
