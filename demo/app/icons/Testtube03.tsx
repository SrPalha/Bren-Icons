import React from 'react';
import type { IconProps } from '../types';

const Testtube03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.016 2.002h7.96"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.533 11.15s3-.926 5.5 1.852m7.5-1.389s-.611.98-1.5 1.389"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.033 18.004.009-.003m3.991-3.997.009-.002"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.527 2.215v4.042c0 .662-.352 1.233-.933 1.545-2.985 1.6-5.789 6.132-2.848 10.777.658 1.14 2.83 3.419 6.254 3.419 3.423 0 5.596-2.28 6.254-3.419 2.941-4.645.137-9.178-2.848-10.777a1.727 1.727 0 0 1-.934-1.545V2.264"/> </svg>
  );
};

export default Testtube03;
