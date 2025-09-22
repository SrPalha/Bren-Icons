import React from 'react';
import type { IconProps } from '../types';

const Train01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 11v-1c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v1c0 3.771 0 5.657-1.172 6.828C17.657 19 15.771 19 12 19c-3.771 0-5.657 0-6.828-1.172C4 16.657 4 14.771 4 11Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 12s3.733 1 8 1c4.267 0 8-1 8-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 19-2 3m12-3 2 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.5 16h2m11 0h2M5 5h14"/> </svg>
  );
};

export default Train01;
