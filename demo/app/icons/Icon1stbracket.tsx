import React from 'react';
import type { IconProps } from '../types';

const Icon1stbracket: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3c-2.411 1.935-4 5.243-4 9 0 3.757 1.589 7.065 4 9M18 3c2.411 1.935 4 5.243 4 9 0 3.757-1.589 7.065-4 9"/> </svg>
  );
};

export default Icon1stbracket;
