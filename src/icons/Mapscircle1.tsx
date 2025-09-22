import React from 'react';
import type { IconProps } from '../types';

const Mapscircle1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.129 13.747a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.528 3.528 0 0 1 14.5 6c1.378 0 2.688.84 3.233 2.152 1.008 2.424-1.056 4.104-2.604 5.595Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 9.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 15-4 4m10 2L3 9"/> </svg>
  );
};

export default Mapscircle1;
