import React from 'react';
import type { IconProps } from '../types';

const Coins01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 13c3.59 0 6.5-.895 6.5-2s-2.91-2-6.5-2S9 9.895 9 11s2.91 2 6.5 2Zm6.5 2.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11m-.5-5c3.59 0 6.5-.895 6.5-2s-2.91-2-6.5-2S2 2.895 2 4s2.91 2 6.5 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 11c-1.892-.23-3.63-.825-4-2m4 7c-1.892-.23-3.63-.825-4-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 21c-1.892-.23-3.63-.826-4-2V4m13 2V4"/> </svg>
  );
};

export default Coins01;
