import React from 'react';
import type { IconProps } from '../types';

const Tabletconnectedusb: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 18c-.199.69-.5 1.232-.96 1.682C19.698 21 17.536 21 13.212 21h-2.038c-4.324 0-6.486 0-7.83-1.318C2 18.364 2 16.242 2 12c0-4.243 0-6.364 1.343-7.682C4.687 3 6.85 3 11.173 3h2.038c4.324 0 6.486 0 7.83 1.318.458.45.76.993.959 1.682"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 3.5v17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.623 12.002a1.188 1.188 0 1 0 2.377 0 1.188 1.188 0 0 0-2.377 0Zm0 0-9.598.004m2.36-3.485 1.122.043a1 1 0 0 1 .898.65l1.032 2.79m-1.243 3.488 1.122-.043a1 1 0 0 0 .898-.65l1.017-2.796"/> </svg>
  );
};

export default Tabletconnectedusb;
