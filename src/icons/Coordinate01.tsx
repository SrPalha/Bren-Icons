import React from 'react';
import type { IconProps } from '../types';

const Coordinate01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.008 5c.59-.606 2.159-2.998 2.999-2.998.84 0 2.409 2.392 2.998 2.999M7.007 2.85V22m11.995-8.006c.607.59 3 2.159 3 2.999 0 .84-2.393 2.409-3 2.998m2.189-2.998H1.998"/> </svg>
  );
};

export default Coordinate01;
