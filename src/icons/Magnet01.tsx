import React from 'react';
import type { IconProps } from '../types';

const Magnet01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12v-1c0-.943 0-1.414.293-1.707C16.586 9 17.057 9 18 9c.943 0 1.414 0 1.707.293C20 9.586 20 10.057 20 11v1m-4 0v2a4 4 0 0 1-8 0v-2m8 0h4m0 0v2a8 8 0 1 1-16 0v-2m4 0v-1c0-.943 0-1.414-.293-1.707C7.414 9 6.943 9 6 9c-.943 0-1.414 0-1.707.293C4 9.586 4 10.057 4 11v1m4 0H4M18 2v4m2-2h-4M8 4H4"/> </svg>
  );
};

export default Magnet01;
