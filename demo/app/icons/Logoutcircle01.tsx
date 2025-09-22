import React from 'react';
import type { IconProps } from '../types';

const Logoutcircle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12H8m8 0c0-.7-1.994-2.008-2.5-2.5M16 12c0 .7-1.994 2.008-2.5 2.5"/> </svg>
  );
};

export default Logoutcircle01;
