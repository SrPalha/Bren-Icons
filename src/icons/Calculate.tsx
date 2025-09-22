import React from 'react';
import type { IconProps } from '../types';

const Calculate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.5 12.95v-1.9c0-4.03 0-6.046-1.391-7.298C18.717 2.5 16.479 2.5 12 2.5c-4.478 0-6.718 0-8.109 1.252S2.5 7.02 2.5 11.05v1.9c0 4.03 0 6.046 1.391 7.298C5.282 21.5 7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.252S21.5 16.98 21.5 12.95Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 8h-4m2-2v4m2 7.5h-4m4-3h-4m-4 3-1.75-1.75m0 0L6.5 14m1.75 1.75L10 14m-1.75 1.75L6.5 17.5M10 8H6"/> </svg>
  );
};

export default Calculate;
