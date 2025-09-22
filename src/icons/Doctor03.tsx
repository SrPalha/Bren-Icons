import React from 'react';
import type { IconProps } from '../types';

const Doctor03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 22v-3c0-2.828 0-4.243-.879-5.121C18.243 13 16.828 13 14 13l-2 2-2-2c-2.828 0-4.243 0-5.121.879C4 14.757 4 16.172 4 19v3M15.5 6.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0ZM16 16v3m1.5-1.5h-3"/> </svg>
  );
};

export default Doctor03;
