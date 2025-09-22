import React from 'react';
import type { IconProps } from '../types';

const Airpod02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Zm0-5h4.75M21.5 7h-4.75"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 7h10v.5c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 9.622 7 8.915 7 7.5V7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14h.009"/> </svg>
  );
};

export default Airpod02;
