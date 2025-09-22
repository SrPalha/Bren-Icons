import React from 'react';
import type { IconProps } from '../types';

const Register: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 16V9a1 1 0 0 1 1-1h1.75a2.25 2.25 0 0 1 0 4.5H10m3 0 1.5 3.5"/> </svg>
  );
};

export default Register;
