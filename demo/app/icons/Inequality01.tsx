import React from 'react';
import type { IconProps } from '../types';

const Inequality01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 20h18m0-4H6.838c-2.38 0-3.571 0-3.803-.627-.232-.627.702-1.32 2.57-2.705L17.303 4"/> </svg>
  );
};

export default Inequality01;
