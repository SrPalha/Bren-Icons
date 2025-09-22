import React from 'react';
import type { IconProps } from '../types';

const Usercircle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.75 9.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.5 19 .56-.98a5 5 0 0 1 4.342-2.52h3.196a5 5 0 0 1 4.341 2.52l.56.98"/> </svg>
  );
};

export default Usercircle02;
