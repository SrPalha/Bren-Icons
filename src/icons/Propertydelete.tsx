import React from 'react';
import type { IconProps } from '../types';

const Propertydelete: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.998 12.5s.002-.47.002-1c0-4.478 0-6.718-1.391-8.109C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21c.53 0 1-.002 1-.002"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 16h1.5M6 16h1m3-4h6M6 12h1m9 4 3 3m0 0 3 3m-3-3-3 3m3-3 3-3"/> </svg>
  );
};

export default Propertydelete;
