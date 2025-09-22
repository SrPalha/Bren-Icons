import React from 'react';
import type { IconProps } from '../types';

const Bitcoinpiechart: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v3m7 7h3m-3 7-2-2m-6.562-2.333V9.333m1.562 0V8m0 8v-1.333M10.437 12h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcoinpiechart;
