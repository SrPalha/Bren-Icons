import React from 'react';
import type { IconProps } from '../types';

const Cottage: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18m-9-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21V11a8 8 0 1 1 16 0v10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 21v-3c0-1.823 1.06-3 3-3s3 1.177 3 3v3"/> </svg>
  );
};

export default Cottage;
