import React from 'react';
import type { IconProps } from '../types';

const Swiperight2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4.501h-6m6 0c0-.7-1.995-2.008-2.5-2.5m2.5 2.5c0 .7-1.995 2.008-2.5 2.5m-3.109 14.997c-.052-1.914.077-2.145.214-2.57.137-.426 1.093-1.962 1.432-3.059 1.094-3.549.074-4.304-1.286-5.31-1.509-1.116-4.354-1.682-5.765-1.56V3.747a1.744 1.744 0 1 0-3.489 0v6.22m0 0-1.85 1.644c-1.241 1.173-1.494 1.86-1.591 2.275-.19.812.07 1.691 1.27 3.432 1.17 1.606 2.107 2.724 2.172 3.668V22m0-12.033v4.066"/> </svg>
  );
};

export default Swiperight2;
