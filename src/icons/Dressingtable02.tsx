import React from 'react';
import type { IconProps } from '../types';

const Dressingtable02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 16c.5.333 1.3 1.4.5 3s0 2.667.5 3m-1-6H5m14 0v-3M5 16c-.5.333-1.3 1.4-.5 3s0 2.667-.5 3m1-6v-3m14 0h1m-1 0H5m0 0H4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 7.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2 7 4.462 7 7.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11 7 1.5-1.5m-1 4L13 8"/> </svg>
  );
};

export default Dressingtable02;
