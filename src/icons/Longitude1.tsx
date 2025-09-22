import React from 'react';
import type { IconProps } from '../types';

const Longitude1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 12c0-5.523-2.239-10-5-10S7 6.477 7 12s2.239 10 5 10 5-4.477 5-10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V2"/> </svg>
  );
};

export default Longitude1;
