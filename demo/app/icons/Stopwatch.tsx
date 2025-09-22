import React from 'react';
import type { IconProps } from '../types';

const Stopwatch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 5.5 1-1m-14 0 1 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9.5v4l2 2m-2-12V2m-2 0h4"/> </svg>
  );
};

export default Stopwatch;
