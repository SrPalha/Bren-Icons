import React from 'react';
import type { IconProps } from '../types';

const Chemistry01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 9h8m9 0h-3m0-5v10.786C17 16.56 15.657 18 14 18s-3-1.44-3-3.214V4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 3v10c0 3.771 0 5.657 1.172 6.828C7.343 21 9.229 21 13 21h8M10 4h8"/> </svg>
  );
};

export default Chemistry01;
