import React from 'react';
import type { IconProps } from '../types';

const Timer01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.08 13.152 8 7l5.42 4.28c.77.608.774 1.767.008 2.38a1.547 1.547 0 0 1-2.347-.508Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 4.82a10.003 10.003 0 0 0-3 7.157C2 17.513 6.477 22 12 22s10-4.487 10-10.023a10.02 10.02 0 0 0-8.013-9.824c-.836-.17-1.254-.254-1.62.047C12 2.5 12 2.987 12 3.96v1.002"/> </svg>
  );
};

export default Timer01;
