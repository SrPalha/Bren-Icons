import React from 'react';
import type { IconProps } from '../types';

const Monocle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 25">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14.496a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 10.496a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 7v2c0 .35-.06.687-.17 1M20 22.325a2.994 2.994 0 0 1-2 0m-2-4.83v2c0 .351.06.688.17 1m5.83-12v-3m0 9v-3m-6 3v-4"/> </svg>
  );
};

export default Monocle;
