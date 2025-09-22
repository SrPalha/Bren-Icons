import React from 'react';
import type { IconProps } from '../types';

const Pointingright3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.329 7.871 9.5 10.005h9.75a1.75 1.75 0 1 1 0 3.5H14l-.478 2.988c-.289 1.929-.434 2.893-.84 3.572C12.009 21.187 11 22 9.526 22c-1.026 0-1.715-.254-3.565-.87-1.174-.392-1.76-.587-2.225-.906a4 4 0 0 1-1.58-2.192C2 17.49 2 16.872 2 15.634v-1.05c0-1.644 0-2.467.302-3.2.054-.13.115-.26.183-.384.378-.696 1.016-1.215 2.293-2.252l4.134-3.359a1.74 1.74 0 0 1 2.417 2.482ZM22 4.5h-6m6 0c0-.7-1.994-2.008-2.5-2.5M22 4.5c0 .7-1.994 2.008-2.5 2.5"/> </svg>
  );
};

export default Pointingright3;
