import React from 'react';
import type { IconProps } from '../types';

const Rockingchair: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 8v6m4-6v6m-8 0h11m-2 0 2 6M4 2l4 12-2 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8h10.5A1.5 1.5 0 0 1 18 9.5M4 18c1.726 2.412 4.665 4 8 4s6.274-1.588 8-4"/> </svg>
  );
};

export default Rockingchair;
