import React from 'react';
import type { IconProps } from '../types';

const Medicine02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.193 12.999a6 6 0 1 1-10.392 6m10.392-6a6 6 0 0 0-10.392 6m10.392-6-10.392 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.043 5.542 5.085-3.005c1.872-1.106 4.266-.45 5.347 1.467A4.082 4.082 0 0 1 20 8.682m-9.957-3.14L4.958 8.547c-1.872 1.106-2.514 3.556-1.433 5.472A3.904 3.904 0 0 0 6.5 16m3.543-10.458L11.5 8"/> </svg>
  );
};

export default Medicine02;
