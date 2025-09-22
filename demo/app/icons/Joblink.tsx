import React from 'react';
import type { IconProps } from '../types';

const Joblink: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.007 21.5H9.605c-3.585 0-5.377 0-6.491-1.135C2 19.23 2 17.403 2 13.75s0-5.48 1.114-6.615C4.228 6 6.02 6 9.605 6h3.803c3.585 0 5.378 0 6.492 1.135.857.873 1.054 2.156 1.1 4.365V13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 18.5h-3m0 3a3 3 0 1 1 0-6m3 6a3 3 0 1 0 0-6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m16 6-.1-.31c-.495-1.54-.742-2.31-1.331-2.75-.59-.44-1.372-.44-2.938-.44h-.263c-1.565 0-2.348 0-2.937.44-.59.44-.837 1.21-1.332 2.75L7 6"/> </svg>
  );
};

export default Joblink;
