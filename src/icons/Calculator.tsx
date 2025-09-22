import React from 'react';
import type { IconProps } from '../types';

const Calculator: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 3v5M8 5.5H3M8 16l-2 2m0 0-2 2m2-2 2 2m-2-2-2-2M20 6h-4m4 12.5h-4m4-3h-4m6-3.5H2m10 10V2"/> </svg>
  );
};

export default Calculator;
