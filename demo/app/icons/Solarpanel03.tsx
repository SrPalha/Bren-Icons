import React from 'react';
import type { IconProps } from '../types';

const Solarpanel03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 9a3 3 0 1 1 6 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.307 12H8.693c-1.318 0-1.976 0-2.487.344-.51.344-.755.953-1.244 2.17l-.804 2c-.998 2.486-1.498 3.729-.9 4.607C3.856 22 5.2 22 7.889 22h8.222c2.689 0 4.033 0 4.631-.879.598-.878.098-2.121-.9-4.607l-.804-2c-.49-1.217-.734-1.826-1.244-2.17-.51-.344-1.17-.344-2.487-.344ZM12 12v10m8-5H4m8-14V2m6 7h1M5 9h1m10.242-4.243.707-.707m-9.899 0 .707.707"/> </svg>
  );
};

export default Solarpanel03;
