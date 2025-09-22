import React from 'react';
import type { IconProps } from '../types';

const Loginsquare2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.037 12.028h-6.975m0 0c0 .57 2.155 2.488 2.155 2.488m-2.155-2.488c0-.585 2.155-2.464 2.155-2.464m-5.18-1.568v8"/> </svg>
  );
};

export default Loginsquare2;
