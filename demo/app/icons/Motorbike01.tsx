import React from 'react';
import type { IconProps } from '../types';

const Motorbike01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.416 18A5 5 0 0 1 20 11.1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.43 9.63h1.727a2 2 0 0 0 1.252-.441l1.828-1.469a1 1 0 0 1 .627-.22H15l-2.716 4.979a1 1 0 0 1-.878.521H9.5M6.43 9.63H4m2.43 0L9.5 13m0 0L7 16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 11-3.008-5.264c-.405-.708-.607-1.062-.909-1.302a2 2 0 0 0-.501-.291C12.224 4 11.816 4 11 4"/> </svg>
  );
};

export default Motorbike01;
