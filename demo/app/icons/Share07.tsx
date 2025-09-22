import React from 'react';
import type { IconProps } from '../types';

const Share07: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.5 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-12 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.535 4.581a8.323 8.323 0 0 0-1.162-.081 8.145 8.145 0 0 0-7.132 4.163m13.472-1.168A7.89 7.89 0 0 1 21.5 12.5a7.87 7.87 0 0 1-.974 3.801m-4.644 3.81a8.238 8.238 0 0 1-2.509.389c-3.79 0-6.974-2.555-7.873-6.01"/> </svg>
  );
};

export default Share07;
