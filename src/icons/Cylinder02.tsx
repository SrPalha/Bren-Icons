import React from 'react';
import type { IconProps } from '../types';

const Cylinder02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 4c0 1.105-2.239 2-5 2s-5-.895-5-2 2.239-2 5-2 5 .895 5 2Zm4 14c0 2.21-4.03 4-9 4s-9-1.79-9-4 4.03-4 9-4 9 1.79 9 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.5 16.5 7 4m13.5 12.5L17 4"/> </svg>
  );
};

export default Cylinder02;
