import React from 'react';
import type { IconProps } from '../types';

const Dressingtable01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 6 1-1m0 3 2-2m-7 8V8a6 6 0 1 1 12 0v6M5 14v8m14-8v8M4 14h16M5 19h14m-7.5-2.5h1"/> </svg>
  );
};

export default Dressingtable01;
