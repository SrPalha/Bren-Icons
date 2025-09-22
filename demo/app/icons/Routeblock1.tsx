import React from 'react';
import type { IconProps } from '../types';

const Routeblock1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 2 6 6m0-6-6 6M6 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-17H8.5a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 1 0 7H12"/> </svg>
  );
};

export default Routeblock1;
