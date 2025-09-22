import React from 'react';
import type { IconProps } from '../types';

const Passwordvalidation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.408 16.668s.625 0 1.25 1.334c0 0 1.986-3.334 3.75-4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.943 7.001h.01m-5.01 0h.01m-5.01 0h.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.892 11.969H5.008a3.004 3.004 0 0 1-3.008-3v-3.97c0-1.657 1.347-3 3.008-3h13.984a3.004 3.004 0 0 1 3.008 3v4.13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 16.002c0-3.314-2.694-6-6.017-6-3.323 0-6.017 2.686-6.017 6 0 3.313 2.694 6 6.017 6 3.323 0 6.017-2.687 6.017-6Z"/> </svg>
  );
};

export default Passwordvalidation;
