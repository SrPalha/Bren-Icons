import React from 'react';
import type { IconProps } from '../types';

const Circlelock01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 15a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 9.5v-3a4.5 4.5 0 1 0-9 0v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15h.009"/> </svg>
  );
};

export default Circlelock01;
