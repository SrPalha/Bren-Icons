import React from 'react';
import type { IconProps } from '../types';

const Cylinder03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 19c0 1.657-4.477 3-10 3S2 20.657 2 19s4.477-3 10-3 10 1.343 10 3Zm0-14c0 1.657-4.477 3-10 3S2 6.657 2 5s4.477-3 10-3 10 1.343 10 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 5v14M2 5v14"/> </svg>
  );
};

export default Cylinder03;
