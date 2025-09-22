import React from 'react';
import type { IconProps } from '../types';

const Oven: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 5h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5.009V5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 8h18M2 22h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22V5c0-2.482.518-3 3-3h12c2.482 0 3 .518 3 3v17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 17v-4c0-.943 0-1.414.293-1.707C6.586 11 7.057 11 8 11h8c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v4c0 .943 0 1.414-.293 1.707C17.414 19 16.943 19 16 19H8c-.943 0-1.414 0-1.707-.293C6 18.414 6 17.943 6 17Z"/> </svg>
  );
};

export default Oven;
