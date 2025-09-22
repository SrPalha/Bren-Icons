import React from 'react';
import type { IconProps } from '../types';

const Bathtub01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m6 20-1 1m13-1 1 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12v1c0 3.3 0 4.95 1.025 5.975C5.05 20 6.7 20 10 20h4c3.3 0 4.95 0 5.975-1.025C21 17.95 21 16.3 21 13v-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12h20M4 12V5.523a2.523 2.523 0 0 1 4.943-.715L9 5M8 6l2.5-2"/> </svg>
  );
};

export default Bathtub01;
