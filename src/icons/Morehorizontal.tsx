import React from 'react';
import type { IconProps } from '../types';

const Morehorizontal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.996 12h.01M18 12h.009M6 12h.009"/> </svg>
  );
};

export default Morehorizontal;
