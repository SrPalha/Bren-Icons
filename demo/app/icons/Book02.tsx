import React from 'react';
import type { IconProps } from '../types';

const Book02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828C18.157 2 16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172 3.5 4.343 3.5 6.229 3.5 10v9.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 22a2.5 2.5 0 0 1 0-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7H9m3 4H9"/> </svg>
  );
};

export default Book02;
