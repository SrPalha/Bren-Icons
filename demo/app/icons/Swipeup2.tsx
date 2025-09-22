import React from 'react';
import type { IconProps } from '../types';

const Swipeup2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 2.001v6m0-6c-.7 0-2.009 1.994-2.5 2.5m2.5-2.5c.7 0 2.009 1.994 2.5 2.5m-5.608 17.496c-.052-1.914.077-2.145.214-2.57.136-.426 1.093-1.962 1.431-3.058 1.095-3.55.075-4.305-1.286-5.311-1.508-1.116-4.354-1.682-5.765-1.56V3.746a1.744 1.744 0 1 0-3.488 0v6.22m0 0L4.647 11.61c-1.24 1.173-1.493 1.86-1.59 2.275-.19.812.069 1.691 1.27 3.432 1.169 1.607 2.107 2.724 2.171 3.668v1.014m0-12.033v4.066"/> </svg>
  );
};

export default Swipeup2;
