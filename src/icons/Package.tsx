import React from 'react';
import type { IconProps } from '../types';

const Package: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691 5.405 8.278C3.802 7.502 3 7.114 3 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11c-.97 0-1.871-.436-3.674-1.309ZM6 12l2 1m9-9L7 9"/> </svg>
  );
};

export default Package;
