import React from 'react';
import type { IconProps } from '../types';

const Usersearch02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18 15.296c-1.257.738-4.555 2.243-2.547 4.126.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.466-.658 3.447-1.578 2.009-1.883-1.288-3.389-2.546-4.126-2.949-1.728-6.69-1.728-9.64 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.801 7.8 1.2 1.2m-.6-3.3a2.7 2.7 0 1 0-5.4 0 2.7 2.7 0 0 0 5.4 0Z"/> </svg>
  );
};

export default Usersearch02;
