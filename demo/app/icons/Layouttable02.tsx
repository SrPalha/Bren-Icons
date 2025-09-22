import React from 'react';
import type { IconProps } from '../types';

const Layouttable02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.107 20.109c-1.391 1.391-3.63 1.391-8.109 1.391-4.478 0-6.717 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12c-.001-4.478-.001-6.718 1.39-8.109C5.281 2.5 7.52 2.5 11.998 2.5c4.478 0 6.718 0 8.109 1.391s1.391 3.63 1.391 8.109c0 4.478 0 6.718-1.391 8.109Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.998 21.5v-19m12.5 5.5h-19m19 8h-19"/> </svg>
  );
};

export default Layouttable02;
