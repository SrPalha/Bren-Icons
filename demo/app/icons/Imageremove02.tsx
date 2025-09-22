import React from 'react';
import type { IconProps } from '../types';

const Imageremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 2.5c-4.478 0-6.718 0-8.109 1.391S2 7.521 2 12c0 4.478 0 6.718 1.391 8.109S7.021 21.5 11.5 21.5c4.478 0 6.718 0 8.109-1.391C21 18.717 21 16.479 21 12v-.95"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 13.635c.619-.09 1.245-.134 1.872-.132 2.652-.056 5.239.77 7.3 2.331 1.91 1.448 3.253 3.44 3.828 5.666"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 16.396c-1.175-.595-2.391-.897-3.614-.896-1.851-.007-3.684.673-5.386 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 5.5h-8"/> </svg>
  );
};

export default Imageremove02;
