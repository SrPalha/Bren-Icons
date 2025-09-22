import React from 'react';
import type { IconProps } from '../types';

const Legal01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m10 11.628-4.925 5.794a1.743 1.743 0 0 1-2.564.103 1.752 1.752 0 0 1 .103-2.57l5.781-4.935"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 10.067-4.952 4.963M9.952 2.002 5 6.965m4.333-4.343L5.62 6.345s1.857 2.481 3.714 4.343c1.857 1.86 4.334 3.722 4.334 3.722l3.714-3.722s-1.857-2.482-3.714-4.343C11.81 4.484 9.333 2.622 9.333 2.622ZM20 11.66l2-1.64m-2 4.92 2 1.093m-10.998 5.966H21m-8.773 0c.551-.988.963-2.877 2.915-2.983.58-.032 1.17-.032 1.75 0 1.951.106 2.365 1.995 2.917 2.983"/> </svg>
  );
};

export default Legal01;
