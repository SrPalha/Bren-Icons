import React from 'react';
import type { IconProps } from '../types';

const Brain: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.998 7.127a4 4 0 1 1-.025 7.74m.025-7.74A4 4 0 0 0 9.09 6.15m7.908.976A3.979 3.979 0 0 1 16.465 9m.508 5.867A2.5 2.5 0 0 0 15 12.05m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4.01 4.01 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3.001 3.001 0 0 0 2.83-2m-3.671-3.88c.09.31.217.606.376.88"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.836 11.743c-.51.492-1.383.577-2.129.158-.746-.42-1.127-1.21-.972-1.901"/> </svg>
  );
};

export default Brain;
