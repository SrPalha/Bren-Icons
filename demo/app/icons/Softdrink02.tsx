import React from 'react';
import type { IconProps } from '../types';

const Softdrink02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.632 18.263 5.031 6.1C4.91 5.188 5.116 5 6.126 5h10.748c1.01 0 1.215.188 1.095 1.1l-1.601 12.163c-.218 1.655-.327 2.483-.954 2.98-1.297 1.031-6.587.987-7.828 0-.627-.497-.736-1.325-.954-2.98Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m13.5 19 .446-16.059A1 1 0 0 1 14.944 2h4.057"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 10c.182-.333.782-1 2.09-1 1.637 0 1.205 1 2.296 1 1.091 0 2.728-1 4.364-1 1.636 0 2.75 1 2.75 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.009 16H10"/> </svg>
  );
};

export default Softdrink02;
