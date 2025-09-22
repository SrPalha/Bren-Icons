import React from 'react';
import type { IconProps } from '../types';

const Table01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10s2.375 1.822 1.375 4.667c-1 2.844 0 4.74.625 5.333m-2-10H4m16 0V4M4 10s-2.375 1.822-1.375 4.667c1 2.844 0 4.74-.625 5.333m2-10V4m16 0h2m-2 0H4m0 0H2m9 3h2"/> </svg>
  );
};

export default Table01;
