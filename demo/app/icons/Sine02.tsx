import React from 'react';
import type { IconProps } from '../types';

const Sine02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 9.011C21 12.001 20.087 21 16.177 21c-2.045 0-3.343-3.62-4.177-9-.834-5.38-2.132-9-4.177-9C3.913 3 3 12 3 14.989"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h3m3 0h2m4 0h2m3 0h3"/> </svg>
  );
};

export default Sine02;
