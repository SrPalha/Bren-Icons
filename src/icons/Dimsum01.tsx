import React from 'react';
import type { IconProps } from '../types';

const Dimsum01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 8.5 22 3M8 17l14-8m-6.447 3.697a7.707 7.707 0 0 0-1.032-1.794c-1.94-2.328-2.5-4.1-2.504-4.903C11.958 7.607 10 8.477 9.012 7c-.987 1.477-2.946.607-3.005-1-.004.802-.563 2.575-2.504 4.903C2.562 12.13 2 13.598 2 15c0 3.314 3.14 6 7.012 6 3.676 0 6.691-2.42 6.988-5.5m-8.5-5-.5 1m3.5-1 .5 1"/> </svg>
  );
};

export default Dimsum01;
