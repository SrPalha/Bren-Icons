import React from 'react';
import type { IconProps } from '../types';

const Uv02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 3v1.5m5 8.5a5 5 0 0 0-10 0M5.988 6.988l-1.06-1.06M22 13h-1.5m-17 0H2m17.07-7.072-1.06 1.06M6.5 16v3c0 .943 0 1.414.293 1.707C7.086 21 7.557 21 8.5 21c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.5 16 2 5 2-5"/> </svg>
  );
};

export default Uv02;
