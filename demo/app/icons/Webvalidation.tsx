import React from 'react';
import type { IconProps } from '../types';

const Webvalidation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 10c-.01-3.585-.114-5.472-1.391-6.682C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.318S2 6.758 2 11c0 4.243 0 6.364 1.391 7.682 1.227 1.162 3.112 1.3 6.609 1.316"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17.5s.5 0 1 1c0 0 1.588-2.5 3-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 8.5h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.5 5.5h.009m3.991 0h.009"/> </svg>
  );
};

export default Webvalidation;
