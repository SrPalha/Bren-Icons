import React from 'react';
import type { IconProps } from '../types';

const Table02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 4h20m-2.5 0L22 20M4.5 4 2 20M4 9h16"/> </svg>
  );
};

export default Table02;
