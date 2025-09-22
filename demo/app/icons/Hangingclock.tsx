import React from 'react';
import type { IconProps } from '../types';

const Hangingclock: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="1.5" d="M2 8h18m-2.5-2v5M2 6v15m0-1C2 13.373 7.373 8 14 8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.5 16.5-1-.5v-2"/> </svg>
  );
};

export default Hangingclock;
