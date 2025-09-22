import React from 'react';
import type { IconProps } from '../types';

const Sorting02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 12h8m-8-4h5m-5-4h3m-3 12h10M5.5 21V3m0 18c-.7 0-2.008-1.994-2.5-2.5M5.5 21c.7 0 2.008-1.994 2.5-2.5"/> </svg>
  );
};

export default Sorting02;
