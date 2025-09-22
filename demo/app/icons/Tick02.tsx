import React from 'react';
import type { IconProps } from '../types';

const Tick02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14 3.5 3.5L19 6.5"/> </svg>
  );
};

export default Tick02;
