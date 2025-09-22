import React from 'react';
import type { IconProps } from '../types';

const Matrix: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h.009m4.986 0h.01m4.986 0H17M7 12h.009M7 16h.009m4.986-4h.01m-.01 4h.01m4.986-4H17m-.009 4H17"/> </svg>
  );
};

export default Matrix;
