import React from 'react';
import type { IconProps } from '../types';

const Php: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12v-2a.5.5 0 0 1 .5-.5h1.25a1.25 1.25 0 1 1 0 2.5H5Zm0 0v2.5M16 12v-2a.5.5 0 0 1 .5-.5h1.25a1.25 1.25 0 1 1 0 2.5H16Zm0 0v2.5m-5.5-5V12m0 0v2.5m0-2.5h3m0-2.5V12m0 0v2.5"/> </svg>
  );
};

export default Php;
