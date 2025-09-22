import React from 'react';
import type { IconProps } from '../types';

const Square01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2.716 7.025c1.99-.105 3.24.052 4.02 1.886.82 2.2 2.85 8.33 3.358 9.744.547 1.519 1.25 2.567 4.138 2.305"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 7.006c-2.863-.025-5.205 4.715-6.507 6.985-1.43 2.62-3.89 7.16-6.493 6.985"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 9h-4l3.2-2.4A2 2 0 1 0 18 5"/> </svg>
  );
};

export default Square01;
