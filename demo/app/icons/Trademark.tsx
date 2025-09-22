import React from 'react';
import type { IconProps } from '../types';

const Trademark: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.994 9.477H8.51m0 0h2.484m-2.484 0v6.02m4.481-.01v-6.01c.336-.107 2.51 2 2.51 2s2.172-2.107 2.508-2v6.01"/> </svg>
  );
};

export default Trademark;
