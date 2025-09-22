import React from 'react';
import type { IconProps } from '../types';

const Promotion: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.926 2.911 8.274 6.105a2.433 2.433 0 0 1-1.617.182 7.584 7.584 0 0 0-.695-.14C4.137 5.94 3 7.384 3 9.045v.912c0 1.66 1.137 3.105 2.962 2.896a7.19 7.19 0 0 0 .695-.139 2.432 2.432 0 0 1 1.617.183l6.652 3.193c1.527.733 2.291 1.1 3.142.814.852-.286 1.144-.899 1.728-2.125a12.174 12.174 0 0 0 0-10.556c-.584-1.226-.876-1.84-1.728-2.125-.851-.286-1.615.08-3.142.814Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.458 20.77 9.967 22c-3.362-2.666-2.951-3.938-2.951-9H8.15c.46 2.86 1.545 4.216 3.043 5.197.922.604 1.112 1.876.265 2.574ZM7.5 12.5v-6"/> </svg>
  );
};

export default Promotion;
