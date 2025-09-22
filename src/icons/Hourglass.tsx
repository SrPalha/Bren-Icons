import React from 'react';
import type { IconProps } from '../types';

const Hourglass: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 2v3a7 7 0 0 1-7 7m0 0a7 7 0 0 1-7-7V2m7 10a7 7 0 0 1 7 7v3m-7-10a7 7 0 0 0-7 7v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 2h16m0 20H4"/> </svg>
  );
};

export default Hourglass;
