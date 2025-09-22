import React from 'react';
import type { IconProps } from '../types';

const Sheriff01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 8c3.476 5.333 16.524 5.333 20 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 10 2.125-7.008c.644-2.122 2.15-.273 3.472.348a3.338 3.338 0 0 0 2.806 0c1.322-.621 2.828-2.47 3.472-.348L19 10m0 1c0 2.808-.303 5.46-2.569 7.012C14.587 19.275 10.857 19.338 10 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 11c0 2.808.303 5.46 2.569 7.012C9.413 19.275 13.143 19.338 14 22"/> </svg>
  );
};

export default Sheriff01;
