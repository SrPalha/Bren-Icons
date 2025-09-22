import React from 'react';
import type { IconProps } from '../types';

const Radioactivealert: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 3a5 5 0 1 0 6 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 13a5 5 0 1 0 0 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 13a5 5 0 1 1 0 6"/> </svg>
  );
};

export default Radioactivealert;
