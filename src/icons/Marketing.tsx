import React from 'react';
import type { IconProps } from '../types';

const Marketing: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18 18c2.21 0 4-3.582 4-8s-1.79-8-4-8-4 3.582-4 8 1.79 8 4 8Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18 2C14.897 2 8.465 4.378 4.771 5.854 3.079 6.53 2 8.178 2 10s1.08 3.47 2.771 4.146C8.465 15.622 14.897 18 18 18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11 22-1.943-1.07A5.934 5.934 0 0 1 6.045 15"/> </svg>
  );
};

export default Marketing;
