import React from 'react';
import type { IconProps } from '../types';

const Pot02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10h20M4 10l.504 5.543c.236 2.592.353 3.887 1.213 4.672.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785.86-.785.977-2.08 1.213-4.672L20 10M4 8l5-1.35m0 0 6-1.621m-6 1.62.206-1.737a1.562 1.562 0 0 1 1.14-1.327l1.969-.532a1.546 1.546 0 0 1 1.645.575L15 5.029m0 0 5-1.35"/> </svg>
  );
};

export default Pot02;
