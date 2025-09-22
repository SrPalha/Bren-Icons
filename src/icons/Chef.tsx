import React from 'react';
import type { IconProps } from '../types';

const Chef: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.398 4.41A3.601 3.601 0 0 1 21 7.405 3.602 3.602 0 0 1 17.625 11H17m-1.602-6.59a3.602 3.602 0 0 0-6.796 0m6.796 0a3.6 3.6 0 0 1 .089 2.093M8.602 4.41c.457.306.84.715 1.116 1.193M8.602 4.41A3.601 3.601 0 0 0 3 7.405 3.602 3.602 0 0 0 6.375 11H7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 14v-4M7 14v-4m11 4.5c-1.599-.622-3.7-1-6-1s-4.4.378-6 1M17 17a5 5 0 0 1-10 0"/> </svg>
  );
};

export default Chef;
