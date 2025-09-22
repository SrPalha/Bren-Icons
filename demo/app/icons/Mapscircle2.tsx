import React from 'react';
import type { IconProps } from '../types';

const Mapscircle2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 9.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 6C16.394 6 18 7.613 18 9.57c0 1.989-1.632 3.384-3.14 4.333a.718.718 0 0 1-.72 0C12.634 12.945 11 11.565 11 9.57 11 7.613 12.606 6 14.5 6Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 15-4 4m10 2L3 9"/> </svg>
  );
};

export default Mapscircle2;
