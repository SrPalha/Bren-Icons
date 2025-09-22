import React from 'react';
import type { IconProps } from '../types';

const Cd: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.5 15.99a6.855 6.855 0 0 0 1.43 1.51m8.096-11c.569.44 1.067.972 1.474 1.573"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 12a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/> </svg>
  );
};

export default Cd;
