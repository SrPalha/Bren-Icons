import React from 'react';
import type { IconProps } from '../types';

const Quran02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 17H6.5a2.5 2.5 0 0 0 0 5H21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 22a2.5 2.5 0 0 1 0-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.672 6.672 12.5 5.5l-1.172 1.172H9.672v1.656L8.5 9.5l1.172 1.172v1.656h1.656L12.5 13.5l1.172-1.172h1.656v-1.656L16.5 9.5l-1.172-1.172V6.672h-1.656Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 19.5v-14A3.5 3.5 0 0 1 7.5 2h10A3.5 3.5 0 0 1 21 5.5V17"/> </svg>
  );
};

export default Quran02;
