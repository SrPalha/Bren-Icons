import React from 'react';
import type { IconProps } from '../types';

const Sortbyup02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15h11M3 9h7M3 21h16m-.5-18v12m0-12c-.7 0-2.009 1.994-2.5 2.5M18.5 3c.7 0 2.009 1.994 2.5 2.5"/> </svg>
  );
};

export default Sortbyup02;
