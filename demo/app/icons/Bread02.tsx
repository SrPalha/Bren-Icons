import React from 'react';
import type { IconProps } from '../types';

const Bread02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 14c0 3-2.239 3-5 3s-5 0-5-3 2.239-7 5-7 5 4 5 7Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 7h10c2.761 0 5 4 5 7s-2.239 3-5 3H7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.86 17C7.436 17 9 16.1 9 14s-.858-4-2.355-4c-1.497 0-2.327 3.97-.928 4.5 1.32.5 1.328-1.5 1.328-1.5"/> </svg>
  );
};

export default Bread02;
