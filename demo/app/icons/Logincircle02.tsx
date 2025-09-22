import React from 'react';
import type { IconProps } from '../types';

const Logincircle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 12.005h-5.975m0 0c0 .568 1.874 2.01 1.874 2.01m-1.874-2.01c0-.582 1.874-1.985 1.874-1.985M8 9.01v6"/> </svg>
  );
};

export default Logincircle02;
