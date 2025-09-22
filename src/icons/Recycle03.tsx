import React from 'react';
import type { IconProps } from '../types';

const Recycle03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3.723A9.003 9.003 0 0 0 2.124 14M9 3.723 6 2.5m3 1.223L8 6.5m11.064 10a8.963 8.963 0 0 0 .936-4c0-4.46-3.243-8.161-7.5-8.876M19.064 16.5l2.936-2m-2.936 2-1.564-3m-13.984 4a8.991 8.991 0 0 0 7.484 4 8.967 8.967 0 0 0 6-2.292M3.516 17.5H7m-3.484 0V21"/> </svg>
  );
};

export default Recycle03;
