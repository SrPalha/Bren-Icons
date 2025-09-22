import React from 'react';
import type { IconProps } from '../types';

const Codecircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 16c.616 0 1.116-.512 1.116-1.143v-1.24c0-.304.117-.595.326-.809l.395-.404a.581.581 0 0 0 0-.808l-.395-.404a1.157 1.157 0 0 1-.326-.808V9.143C17.116 8.512 16.616 8 16 8m-8 8c-.616 0-1.116-.512-1.116-1.143v-1.24c0-.304-.117-.595-.326-.809l-.395-.404a.581.581 0 0 1 0-.808l.395-.404c.209-.214.326-.505.326-.808V9.143C6.884 8.512 7.384 8 8 8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12h.009m3.982 0H14"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Codecircle;
