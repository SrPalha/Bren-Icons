import React from 'react';
import type { IconProps } from '../types';

const Door02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 22V6c0-1.886 0-2.828.586-3.414C6.172 2 7.114 2 9 2h6c1.886 0 2.828 0 3.414.586C19 3.172 19 4.114 19 6v16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18m-5-9v-2"/> </svg>
  );
};

export default Door02;
