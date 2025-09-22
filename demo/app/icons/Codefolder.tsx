import React from 'react';
import type { IconProps } from '../types';

const Codefolder: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 7h7.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 9.09 22 10.143 22 12.25c0 3.511 0 5.267-.843 6.528a4.998 4.998 0 0 1-1.38 1.38C18.518 21 16.762 21 13.25 21H12c-4.714 0-7.071 0-8.536-1.465C2 18.072 2 15.714 2 11V7.944c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 3.38C4.22 3 5.128 3 6.944 3 8.108 3 8.69 3 9.2 3.191c1.163.436 1.643 1.493 2.168 2.542L12 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.5 12 .92.793c.387.333.58.5.58.707 0 .207-.193.374-.58.707L15.5 15m-7-3-.92.793c-.387.333-.58.5-.58.707 0 .207.193.374.58.707L8.5 15m4.5-4-2 5"/> </svg>
  );
};

export default Codefolder;
