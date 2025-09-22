import React from 'react';
import type { IconProps } from '../types';

const Dollar01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.958 8.389C17.958 6.24 15.291 4.5 12 4.5c-3.29 0-5.958 1.741-5.958 3.889 0 2.148 1.625 3.333 5.958 3.333s6.5 1.111 6.5 3.89c0 2.777-2.91 3.888-6.5 3.888s-6.5-1.741-6.5-3.889"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 2.5v1.71m0 17.29v-1.71"/> </svg>
  );
};

export default Dollar01;
