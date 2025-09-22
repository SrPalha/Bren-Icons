import React from 'react';
import type { IconProps } from '../types';

const Imagedone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391S21 16.979 21 12.5c0-1.36 0-2.514-.039-3.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 21.5c4.372-5.225 9.274-12.116 16.497-7.458"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 6s1 0 2 2c0 0 3.177-5 6-6"/> </svg>
  );
};

export default Imagedone01;
