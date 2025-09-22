import React from 'react';
import type { IconProps } from '../types';

const Megaphone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.926 4.411 8.274 7.605a2.433 2.433 0 0 1-1.617.182 7.584 7.584 0 0 0-.695-.14C4.137 7.44 3 8.884 3 10.545v.912c0 1.66 1.137 3.105 2.962 2.896a7.19 7.19 0 0 0 .695-.139 2.432 2.432 0 0 1 1.617.183l6.652 3.193c1.527.733 2.291 1.1 3.142.814.852-.286 1.144-.899 1.728-2.125a12.174 12.174 0 0 0 0-10.556c-.584-1.226-.876-1.84-1.728-2.125-.851-.286-1.615.08-3.142.814Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17v.5c0 1.284 0 1.926-.224 2.289a1.5 1.5 0 0 1-1.41.705c-.425-.038-.939-.424-1.966-1.194l-1.2-.9C7.223 17.667 7 17.222 7 16v-1.5m.5-.5V8"/> </svg>
  );
};

export default Megaphone02;
