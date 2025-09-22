import React from 'react';
import type { IconProps } from '../types';

const Prison: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18M9 3v18m6-6v6m0-18v6m6-6v18M2 3h20m-1 6h-6c-.943 0-1.414 0-1.707.293C13 9.586 13 10.057 13 11v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h6M2 21h20m-5-9h-1"/> </svg>
  );
};

export default Prison;
