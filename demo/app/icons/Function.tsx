import React from 'react';
import type { IconProps } from '../types';

const Function: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19c.264.956.797 2 2.187 2 2.407 0 3.008-2 4.813-9 1.805-7 2.406-9 4.813-9 1.39 0 1.923 1.044 2.187 2M9 10h8"/> </svg>
  );
};

export default Function;
