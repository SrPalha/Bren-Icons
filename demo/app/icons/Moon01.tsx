import React from 'react';
import type { IconProps } from '../types';

const Moon01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.099 7.845a3.5 3.5 0 1 1-4.943-4.943m4.943 4.943A9.963 9.963 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.483 0 2.89.323 4.155.901M21.1 7.845A10.039 10.039 0 0 0 16.155 2.9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8h.006M7 14h.006"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Moon01;
