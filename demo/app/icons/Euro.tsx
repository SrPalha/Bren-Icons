import React from 'react';
import type { IconProps } from '../types';

const Euro: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h8m-8 4h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 17.608C17.87 19.64 15.812 21 13.461 21 9.893 21 7 17.866 7 14v-4c0-3.866 2.893-7 6.461-7C15.813 3 17.87 4.36 19 6.392"/> </svg>
  );
};

export default Euro;
