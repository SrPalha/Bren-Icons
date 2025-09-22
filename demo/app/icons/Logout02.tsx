import React from 'react';
import type { IconProps } from '../types';

const Logout02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m11 3-.663.234c-2.578.91-3.868 1.365-4.602 2.403C5 6.676 5 8.043 5 10.777v2.445c0 2.735 0 4.102.735 5.14.734 1.039 2.024 1.494 4.602 2.404L11 21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12H11m10 0c0-.7-1.994-2.008-2.5-2.5M21 12c0 .7-1.994 2.008-2.5 2.5"/> </svg>
  );
};

export default Logout02;
