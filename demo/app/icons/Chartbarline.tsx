import React from 'react';
import type { IconProps } from '../types';

const Chartbarline: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15v4m8-10v10m10 3H2m18-9v6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5.6 8.8a2 2 0 1 0-3.2 2.4 2 2 0 0 0 3.2-2.4Zm0 0 4.8-3.6m0 0a2 2 0 0 0 3.39-.305M10.4 5.2a2 2 0 1 1 3.39-.305m0 0 4.42 2.21m0 0a2 2 0 1 0 3.578 1.79 2 2 0 0 0-3.577-1.79Z"/> </svg>
  );
};

export default Chartbarline;
