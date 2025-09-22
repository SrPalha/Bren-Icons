import React from 'react';
import type { IconProps } from '../types';

const Imagedone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391C21 19.217 21 16.979 21 12.5V9"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 14.135c.619-.09 1.245-.134 1.872-.132 2.652-.056 5.239.77 7.3 2.331 1.91 1.448 3.253 3.44 3.828 5.666"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 16.896c-1.175-.595-2.391-.897-3.614-.896-1.851-.007-3.684.673-5.386 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 6s1 0 2 2c0 0 3.177-5 6-6"/> </svg>
  );
};

export default Imagedone02;
