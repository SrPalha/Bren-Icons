import React from 'react';
import type { IconProps } from '../types';

const Testtube02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 2v16a4 4 0 0 1-8 0V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 8.556c.889-1.153 2.31-.322 4 .762 2.222 1.426 3.556.332 4-.703"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 2h10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11 18.002.009-.002M13 14.002l.009-.003"/> </svg>
  );
};

export default Testtube02;
