import React from 'react';
import type { IconProps } from '../types';

const Airpod01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Zm0-3h4.75M21.5 9h-4.75"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 7H9a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4Z"/> </svg>
  );
};

export default Airpod01;
