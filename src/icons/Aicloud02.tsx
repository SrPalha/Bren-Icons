import React from 'react';
import type { IconProps } from '../types';

const Aicloud02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 8h.022a4.5 4.5 0 0 1 1.5 8.744M17.478 8A5.5 5.5 0 1 0 6.52 7.023M17.477 8a5.475 5.475 0 0 1-1.235 3M6.52 7.023A5 5 0 0 0 5 16.584m1.52-9.561A4.978 4.978 0 0 1 10 8m8.25 13.25L16 19v-2m2.25 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-12.5.75L8 19v-2m-2.25 3.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm6.25.75V17m0 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"/> </svg>
  );
};

export default Aicloud02;
