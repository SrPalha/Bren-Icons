import React from 'react';
import type { IconProps } from '../types';

const Packageremove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 22c-.818 0-1.6-.33-3.163-.99C3.946 19.366 2 18.543 2 17.16V7m9 15V11.355M11 22c.617 0 1.12-.188 2-.563M20 7v5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m16 15 3 3m0 0 3 3m-3-3-3 3m3-3 3-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.326 9.691 4.405 8.278C2.802 7.502 2 7.114 2 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C9.13 2.436 10.03 2 11 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C19.198 5.498 20 5.886 20 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C12.87 10.564 11.97 11 11 11c-.97 0-1.871-.436-3.674-1.309ZM5 12l2 1m9-9L6 9"/> </svg>
  );
};

export default Packageremove;
