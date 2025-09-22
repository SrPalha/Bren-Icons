import React from 'react';
import type { IconProps } from '../types';

const Desk01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 4H2m19 4H3m18 4h-7m0-4v10c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h3c.943 0 1.414 0 1.707-.293C21 19.414 21 18.943 21 18V8M3 4v16M21 4v4"/> </svg>
  );
};

export default Desk01;
