import React from 'react';
import type { IconProps } from '../types';

const Coinsyen: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 6.5c.167.713.9 2.333 2.5 3.111m0 0c1.6-.778 2.333-2.398 2.5-3.111M14 9.611V13.5m2.083-2.333h-4.166"/> </svg>
  );
};

export default Coinsyen;
