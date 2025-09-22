import React from 'react';
import type { IconProps } from '../types';

const Legal02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m14.001 9.798-9.608.694c-1.289.093-2.392-.827-2.392-1.994s1.103-2.087 2.392-1.993l9.608.693"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.998h-7.999m8-11h-8m7 0h-6s-.5 2.962-.5 5.5c0 2.539.5 5.5.5 5.5h6s.5-2.962.5-5.5-.5-5.5-.5-5.5Zm-8 18.005h9.998m-8.773 0c.551-.988.963-2.878 2.915-2.983.58-.032 1.17-.032 1.75 0 1.951.105 2.365 1.995 2.917 2.983"/> </svg>
  );
};

export default Legal02;
