import React from 'react';
import type { IconProps } from '../types';

const Ketupat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.775 9.649-1.926-1.926C14.034 5.908 13.126 5 11.998 5c-1.128 0-2.036.908-3.851 2.723L6.22 9.65c-1.815 1.815-2.723 2.723-2.723 3.851 0 1.128.908 2.036 2.723 3.851l1.926 1.926C9.962 21.092 10.87 22 11.998 22c1.128 0 2.036-.908 3.851-2.723l1.926-1.926c1.815-1.815 2.723-2.723 2.723-3.851 0-1.128-.908-2.036-2.723-3.851Zm-1.027-.899-4.75 4.75m0 0-4.75 4.75m4.75-4.75-4.75-4.75m4.75 4.75 4.75 4.75M15 2c-2.4.24-3 2.3-3 3-.167-.6-1-1.8-3-1.8"/> </svg>
  );
};

export default Ketupat;
