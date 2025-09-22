import React from 'react';
import type { IconProps } from '../types';

const Storeverified01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.971 7.5s.5 0 1 1c0 0 1.589-2.5 3-3m.024 9.542.03 4.55A2.503 2.503 0 0 1 16.518 22H5.393a2.503 2.503 0 0 1-2.507-2.499l.086-6.466m6.01-7.022-3.834-.064a2.005 2.005 0 0 0-1.959 1.389l-1.097 3.416c-.13.404-.139.845.077 1.211.785 1.334 2.895 3.154 6.248 1.198m-.971-1.83c.39 1.268 1.92 3.493 5.04 2.204"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 7.016a5.012 5.012 0 0 1-5.007 5.016 5.012 5.012 0 0 1-5.007-5.016A5.012 5.012 0 0 1 16.993 2 5.012 5.012 0 0 1 22 7.016Z"/> </svg>
  );
};

export default Storeverified01;
