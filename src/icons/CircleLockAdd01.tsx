import React from 'react';
import type { IconProps } from '../types';

const Circlelockadd01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 22v-8m-4 4h8m-9.825 3.998C6.64 22.095 3.5 18.806 3.5 14.999 3.5 11.133 6.697 8 10.64 8a7.174 7.174 0 0 1 5.86 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3"/> </svg>
  );
};

export default Circlelockadd01;
