import React from 'react';
import type { IconProps } from '../types';

const Kitchenutensils: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.983 14V3m0 11c-1.658 0-3.003 1.435-3.003 2.625 0 1.75 1.345 4.375 3.003 4.375 1.658 0 3.003-2.625 3.003-4.375 0-1.19-1.345-2.625-3.003-2.625Zm-7.004-3.972v10.971M3.686 3.13l-.782.078a1 1 0 0 0-.89 1.148l.669 4.316c.113.73.743 1.339 1.484 1.339H5.79c.74 0 1.37-.608 1.484-1.34l.67-4.315a1 1 0 0 0-.89-1.148l-.78-.078a13.023 13.023 0 0 0-2.588 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.996 13.819V3.026c1.159.32 3.086 1.527 3.405 4.503l.573 4.514c.1.793-.101 1.584-.89 1.719-.66.114-1.661.15-3.088.057Zm0 0V21"/> </svg>
  );
};

export default Kitchenutensils;
