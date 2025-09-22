import React from 'react';
import type { IconProps } from '../types';

const Login1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 3.095A10.312 10.312 0 0 0 12.6 3C7.298 3 3 7.03 3 12s4.298 9 9.6 9c.476 0 .943-.032 1.4-.095"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 14.5c-.506-.492-2.5-1.8-2.5-2.5m0 0c0-.7 1.994-2.008 2.5-2.5M11 12h10"/> </svg>
  );
};

export default Login1;
