import React from 'react';
import type { IconProps } from '../types';

const Pot01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 9h20M4 9l.504 5.543c.236 2.592.353 3.887 1.213 4.672.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785.86-.785.977-2.08 1.213-4.672L20 9M4 6h16M9 6l.623-2.057A1.5 1.5 0 0 1 11.016 3h1.969a1.5 1.5 0 0 1 1.392.943L15 6"/> </svg>
  );
};

export default Pot01;
