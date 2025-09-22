import React from 'react';
import type { IconProps } from '../types';

const Share02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 4.5c-3.496 1.201-6 4.442-6 8.251 0 1.207.251 2.357.706 3.402M15 4.5c3.496 1.201 6 4.442 6 8.251 0 1.023-.18 2.004-.512 2.916M16.5 20.33A9.157 9.157 0 0 1 12 21.5a9.157 9.157 0 0 1-4.5-1.17M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Share02;
