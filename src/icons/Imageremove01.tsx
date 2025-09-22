import React from 'react';
import type { IconProps } from '../types';

const Imageremove01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391C21 19.217 21 16.979 21 12.5v-.95"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 21c4.21-4.751 8.941-11.053 16-6.327"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 6h-8"/> </svg>
  );
};

export default Imageremove01;
