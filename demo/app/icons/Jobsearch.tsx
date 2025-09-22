import React from 'react';
import type { IconProps } from '../types';

const Jobsearch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135C2 18.73 2 16.903 2 13.25s0-5.48 1.114-6.615C4.228 5.5 6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135.857.873 1.054 2.156 1.1 4.365"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.017 20.023 22 22m-.947-4.474a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m16 5.5-.1-.31c-.495-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.63 2h-.263c-1.565 0-2.348 0-2.937.44-.59.44-.837 1.21-1.332 2.75L7 5.5"/> </svg>
  );
};

export default Jobsearch;
