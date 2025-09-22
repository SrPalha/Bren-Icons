import React from 'react';
import type { IconProps } from '../types';

const Moon1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22c3.314 0 6-4.477 6-10S15.314 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/> </svg>
  );
};

export default Moon1;
