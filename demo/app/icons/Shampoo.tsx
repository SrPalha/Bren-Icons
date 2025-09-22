import React from 'react';
import type { IconProps } from '../types';

const Shampoo: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13a5 5 0 0 1 10 0v5c0 1.886 0 2.828-.586 3.414C15.828 22 14.886 22 13 22h-2c-1.886 0-2.828 0-3.414-.586C7 20.828 7 19.886 7 18v-5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8V7c0-.943 0-1.414.293-1.707C10.586 5 11.057 5 12 5c.943 0 1.414 0 1.707.293C14 5.586 14 6.057 14 7v1m-2-3V2m0 0h-2m2 0h2.745a3 3 0 0 1 2.041.802L17 3M7 13h10"/> </svg>
  );
};

export default Shampoo;
