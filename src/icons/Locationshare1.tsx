import React from 'react';
import type { IconProps } from '../types';

const Locationshare1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.168 7a10.032 10.032 0 0 1 0 8.002m-18.336 0a10.032 10.032 0 0 1 0-8.002"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.347 19.962A1.95 1.95 0 0 1 12 20.5a1.95 1.95 0 0 1-1.347-.538c-3.31-3.18-7.744-6.732-5.581-11.89C6.242 5.285 9.048 3.5 12 3.5s5.76 1.784 6.928 4.573c2.16 5.15-2.263 8.72-5.58 11.889Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/> </svg>
  );
};

export default Locationshare1;
