import React from 'react';
import type { IconProps } from '../types';

const Search02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m14 14 2.5 2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.433 18.525a1.48 1.48 0 1 1 2.092-2.092l3.042 3.042a1.48 1.48 0 1 1-2.092 2.092l-3.042-3.042Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M16 9A7 7 0 1 0 2 9a7 7 0 0 0 14 0Z"/> </svg>
  );
};

export default Search02;
