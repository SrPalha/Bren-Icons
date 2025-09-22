import React from 'react';
import type { IconProps } from '../types';

const Removecirclehalfdot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12H8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.649 5.079c.138-.147.28-.29.427-.428M7.947 2.73c.182-.081.366-.158.553-.229M2.732 7.942c-.083.183-.16.37-.232.558"/> </svg>
  );
};

export default Removecirclehalfdot;
