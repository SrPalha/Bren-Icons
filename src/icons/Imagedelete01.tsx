import React from 'react';
import type { IconProps } from '../types';

const Imagedelete01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 21c4.21-4.751 8.941-11.053 16-6.327"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 12.5c0 4.478 0 6.718-1.391 8.109C18.217 22 15.979 22 11.5 22c-4.478 0-6.718 0-8.109-1.391C2 19.217 2 16.979 2 12.5c0-4.478 0-6.718 1.391-8.109S7.021 3 11.5 3M22 9l-3.5-3.5m0 0L15 2m3.5 3.5L22 2m-3.5 3.5L15 9"/> </svg>
  );
};

export default Imagedelete01;
