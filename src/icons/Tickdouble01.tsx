import React from 'react';
import type { IconProps } from '../types';

const Tickdouble01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11"/> </svg>
  );
};

export default Tickdouble01;
