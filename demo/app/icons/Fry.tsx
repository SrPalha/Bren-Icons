import React from 'react';
import type { IconProps } from '../types';

const Fry: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 9.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.008 9h-.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 22 7-7"/> </svg>
  );
};

export default Fry;
