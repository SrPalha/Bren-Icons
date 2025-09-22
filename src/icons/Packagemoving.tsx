import React from 'react';
import type { IconProps } from '../types';

const Packagemoving: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 22c-.818 0-1.6-.341-3.163-1.024C8.012 20.18 6.616 19.57 5.647 19H2m11 3c.818 0 1.6-.341 3.163-1.024C20.054 19.278 22 18.43 22 17V6.5M13 22V11M4 6.5v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.326 9.691 6.405 8.278C4.802 7.502 4 7.114 4 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C11.13 2.436 12.03 2 13 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C21.198 5.498 22 5.886 22 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C14.87 10.564 13.97 11 13 11c-.97 0-1.871-.436-3.674-1.309Zm8.811-5.675L7.867 8.985M2 13h3m-3 3h3"/> </svg>
  );
};

export default Packagemoving;
