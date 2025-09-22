import React from 'react';
import type { IconProps } from '../types';

const Dollar02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.417 8.148C18.417 5.858 15.544 4 12 4 8.456 4 5.583 5.857 5.583 8.148c0 2.291 1.75 3.556 6.417 3.556s7 1.185 7 4.148C19 18.815 15.866 20 12 20s-7-1.857-7-4.148"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20"/> </svg>
  );
};

export default Dollar02;
