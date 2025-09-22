import React from 'react';
import type { IconProps } from '../types';

const Chartmaximum: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6h.009m2.99 0h.008m2.99 0h.008m2.99 0h.009m2.989 0h.009m2.989 0H21"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M19 21c0-6.627-2.686-12-6-12s-6 5.373-6 12"/> </svg>
  );
};

export default Chartmaximum;
