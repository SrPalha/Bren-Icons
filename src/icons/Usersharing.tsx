import React from 'react';
import type { IconProps } from '../types';

const Usersharing: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.783 17.111c-1.1.632-3.986 1.922-2.229 3.536C6.413 21.436 7.37 22 8.571 22h6.858c1.202 0 2.158-.564 3.017-1.353 1.757-1.614-1.128-2.904-2.229-3.536-2.58-1.481-5.854-1.481-8.434 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2.854 16A9.9 9.9 0 0 1 2 11.965C2 6.46 6.477 2 12 2s10 4.461 10 9.965A9.9 9.9 0 0 1 21.146 16"/> </svg>
  );
};

export default Usersharing;
