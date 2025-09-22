import React from 'react';
import type { IconProps } from '../types';

const Mobileprogramming01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 8c.01-2.644.108-4.059 1.024-4.975C7.049 2 8.699 2 11.999 2s4.95 0 5.975 1.025c.916.916 1.013 2.33 1.023 4.975M5 16c.01 2.644.108 4.059 1.024 4.975C7.049 22 8.699 22 11.999 22s4.95 0 5.975-1.025c.916-.916 1.013-2.33 1.023-4.975"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2m3-9 1.227 1.057c.515.445.773.667.773.943 0 .276-.258.498-.773.943L16 14m-8-4-1.227 1.057C6.258 11.502 6 11.724 6 12c0 .276.258.498.773.943L8 14m5-5-2 6"/> </svg>
  );
};

export default Mobileprogramming01;
