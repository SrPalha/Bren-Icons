import React from 'react';
import type { IconProps } from '../types';

const Gaspipe: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 17.5h6m0 3H2m14-3h6m0 3h-6M13.5 12h-3v4h3v-4Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 7 1.5-1.5M14 16h-4c-.943 0-1.414 0-1.707.293C8 16.586 8 17.057 8 18v2c0 .943 0 1.414.293 1.707C8.586 22 9.057 22 10 22h4c.943 0 1.414 0 1.707-.293C16 21.414 16 20.943 16 20v-2c0-.943 0-1.414-.293-1.707C15.414 16 14.943 16 14 16Z"/> </svg>
  );
};

export default Gaspipe;
