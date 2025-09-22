import React from 'react';
import type { IconProps } from '../types';

const Boat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 21.193c.685 1.051 1.571 1.051 2.273 0 2.257-3.452 4.407 2.483 6 .04 2.43-3.664 4.178 2.689 6-.04 2.376-3.635 3.857 2.385 5.727.391"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.572 17-1.497-4.354c-.271-.789.228-1.646.958-1.646h17.825c3.094 0-.864 6-2.861 6M18 11l-2.799-3.499A4 4 0 0 0 12.078 6H8a2 2 0 0 0-2 2v3m4-5V3a1 1 0 0 0-1-1H8"/> </svg>
  );
};

export default Boat;
