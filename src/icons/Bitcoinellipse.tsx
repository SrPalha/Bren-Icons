import React from 'react';
import type { IconProps } from '../types';

const Bitcoinellipse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.5 16V8M11 8V6m2.5 2V6M11 18v-2m2.5 2v-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 12h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H8m0-8h6.5A1.5 1.5 0 0 1 16 9.5v1a1.5 1.5 0 0 1-1.5 1.5h-5"/> </svg>
  );
};

export default Bitcoinellipse;
