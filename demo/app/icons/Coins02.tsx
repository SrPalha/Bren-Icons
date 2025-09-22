import React from 'react';
import type { IconProps } from '../types';

const Coins02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.833 2.969A7.397 7.397 0 0 1 3.03 10.833"/> </svg>
  );
};

export default Coins02;
