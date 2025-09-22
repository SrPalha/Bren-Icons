import React from 'react';
import type { IconProps } from '../types';

const Factory01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21c1.5-3 2.5-7 2.5-13h7c0 6 1 10 2.5 13M12 4.265c1.17-1.637 2.668-1.637 3.838 0 .706 1.004 1.618.967 2.341-.037 1.153-1.637 2.65-1.637 3.821 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.85 12.071h3.554c.14 1.838-.014 5.045 3.291 8.749M2 21h19"/> </svg>
  );
};

export default Factory01;
