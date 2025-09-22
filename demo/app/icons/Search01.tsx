import React from 'react';
import type { IconProps } from '../types';

const Search01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5 22 22"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"/> </svg>
  );
};

export default Search01;
