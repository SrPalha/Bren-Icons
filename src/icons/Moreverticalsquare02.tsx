import React from 'react';
import type { IconProps } from '../types';

const Moreverticalsquare02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 12h.01m-.018 4h.01M12 8h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.484 12c0-4.478 0-6.718 1.392-8.109C5.266 2.5 7.506 2.5 11.984 2.5c4.479 0 6.718 0 8.11 1.391 1.39 1.391 1.39 3.63 1.39 8.109 0 4.478 0 6.718-1.39 8.109-1.392 1.391-3.631 1.391-8.11 1.391-4.478 0-6.717 0-8.108-1.391-1.392-1.392-1.392-3.63-1.392-8.109Z"/> </svg>
  );
};

export default Moreverticalsquare02;
