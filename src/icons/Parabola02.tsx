import React from 'react';
import type { IconProps } from '../types';

const Parabola02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 2c0 8.284-4.03 15-9 15S3 10.284 3 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 20h1.059m11.647 0h1.059m3.176 0H21M7.235 20h1.06"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.5 4.5C11.1 2.686 11.45 2 12 2m0 0c.55 0 .9.686 2.5 2.5M12 2v20"/> </svg>
  );
};

export default Parabola02;
