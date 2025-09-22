import React from 'react';
import type { IconProps } from '../types';

const Ufo: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8c-2.989.556-5 1.595-5 2.785C2 12.56 6.477 14 12 14s10-1.44 10-3.215c0-1.19-2.011-2.23-5-2.785"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.322 8.84c-.449-.625-.354-1.026-.164-1.827C7.685 4.79 9.62 3 12 3c2.38 0 4.315 1.79 4.842 4.013.19.801.285 1.202-.164 1.827-1.225 1.706-8.366 1.379-9.356 0ZM7 14l-2 7m12-7 2 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19h.009"/> </svg>
  );
};

export default Ufo;
