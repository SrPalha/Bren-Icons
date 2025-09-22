import React from 'react';
import type { IconProps } from '../types';

const Aicloud01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 8h.022a4.5 4.5 0 0 1 2.5 8.242M17.478 8A5.5 5.5 0 1 0 6.52 7.023M17.477 8a5.467 5.467 0 0 1-.578 2M6.52 7.023a5 5 0 0 0-2.168 9.22m2.168-9.22A4.978 4.978 0 0 1 10 8m3 6h-2c-.943 0-1.414 0-1.707.293C9 14.586 9 15.057 9 16v2c0 .943 0 1.414.293 1.707C9.586 20 10.057 20 11 20h2c.943 0 1.414 0 1.707-.293C15 19.414 15 18.943 15 18v-2c0-.943 0-1.414-.293-1.707C14.414 14 13.943 14 13 14Zm-2.5 6v2m3-2v2m-3-10v2m3-2v2M9 15.5H7m2 3H7m10-3h-2m2 3h-2"/> </svg>
  );
};

export default Aicloud01;
