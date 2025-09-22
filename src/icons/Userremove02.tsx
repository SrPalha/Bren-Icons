import React from 'react';
import type { IconProps } from '../types';

const Userremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126a9.611 9.611 0 0 0-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 4.5 19.5 7m0 0L17 9.5M19.5 7 22 9.5M19.5 7 17 4.5"/> </svg>
  );
};

export default Userremove02;
