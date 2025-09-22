import React from 'react';
import type { IconProps } from '../types';

const House01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2 2 7m10-4v19H7c-1.886 0-2.828 0-3.414-.586C3 20.828 3 19.886 3 18V7m9 0 10 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 22h7c1.886 0 2.828 0 3.414-.586C21 20.828 21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1m8-1h1m-.5 8v-4"/> </svg>
  );
};

export default House01;
