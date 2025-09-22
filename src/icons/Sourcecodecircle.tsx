import React from 'react';
import type { IconProps } from '../types';

const Sourcecodecircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 10 1.227 1.057c.515.445.773.667.773.943 0 .276-.258.498-.773.943L16 14m-8-4-1.227 1.057C6.258 11.502 6 11.724 6 12c0 .276.258.498.773.943L8 14m5-5-2 6"/> </svg>
  );
};

export default Sourcecodecircle;
