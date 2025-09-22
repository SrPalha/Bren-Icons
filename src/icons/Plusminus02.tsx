import React from 'react';
import type { IconProps } from '../types';

const Plusminus02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21 21 3M7 3v8m4-4H3m18 11h-8"/> </svg>
  );
};

export default Plusminus02;
