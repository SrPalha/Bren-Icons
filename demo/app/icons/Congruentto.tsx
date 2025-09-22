import React from 'react';
import type { IconProps } from '../types';

const Congruentto: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 13h16M4 19h16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6.927C6.667 3.928 9.333 4.806 12 7s5.333 3.072 8 .073"/> </svg>
  );
};

export default Congruentto;
