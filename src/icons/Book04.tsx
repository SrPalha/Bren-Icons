import React from 'react';
import type { IconProps } from '../types';

const Book04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 4.945H16a1.5 1.5 0 0 1 1.5 1.5v1.5m-2.5 5H9m3 4H9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.497 2H6.307c-.496 0-1.005.073-1.406.368-1.274.935-2.256 3.02-.273 4.903.556.528 1.334.72 2.099.72h11.556c.794 0 2.217.113 2.217 2.536v7.454c0 2.22-1.79 4.019-3.997 4.019h-9.03c-2.204 0-3.807-1.557-3.933-3.929L3.506 5.166"/> </svg>
  );
};

export default Book04;
