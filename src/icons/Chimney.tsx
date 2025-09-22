import React from 'react';
import type { IconProps } from '../types';

const Chimney: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.5 22-1.117-5.024a37.093 37.093 0 0 1-.883-8.049.928.928 0 0 0-.928-.927H7.428a.927.927 0 0 0-.927.927 37.1 37.1 0 0 1-.883 8.049L4.5 22M3 22h14m0-20h-4a3 3 0 0 0-3 3m10-3h1m-8 3h6"/> </svg>
  );
};

export default Chimney;
