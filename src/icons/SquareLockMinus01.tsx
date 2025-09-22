import React from 'react';
import type { IconProps } from '../types';

const Squarelockminus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 17h8m-10 5a91.23 91.23 0 0 1-4.374-.1 3.558 3.558 0 0 1-3.353-3.055C3.123 17.755 3 16.638 3 15.5c0-1.138.123-2.255.273-3.345A3.558 3.558 0 0 1 6.626 9.1a97.73 97.73 0 0 1 4.523-.1c1.614 0 3.08.034 4.523.1A3.56 3.56 0 0 1 19 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9"/> </svg>
  );
};

export default Squarelockminus01;
