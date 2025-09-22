import React from 'react';
import type { IconProps } from '../types';

const Searchlist02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6h4m-4 7h4m-4 8h19m-1.6-7.6L22 16m-1.3-7.15a5.85 5.85 0 1 0-11.7 0 5.85 5.85 0 0 0 11.7 0Z"/> </svg>
  );
};

export default Searchlist02;
