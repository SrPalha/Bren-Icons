import React from 'react';
import type { IconProps } from '../types';

const Image01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 21c4.372-5.225 9.274-12.116 16.497-7.458"/> </svg>
  );
};

export default Image01;
