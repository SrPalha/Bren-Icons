import React from 'react';
import type { IconProps } from '../types';

const Minusplus02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21 21 3m-4 10v8m4-4h-8M11 7H3"/> </svg>
  );
};

export default Minusplus02;
