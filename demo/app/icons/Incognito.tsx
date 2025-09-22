import React from 'react';
import type { IconProps } from '../types';

const Incognito: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm10 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12h20m-7.5 4.341A2.997 2.997 0 0 0 12 15a2.997 2.997 0 0 0-2.5 1.341M3 12l1.662-6.297c.097-.367.145-.55.192-.681.681-1.896 2.91-2.62 4.519-1.47.11.08.252.2.535.444.162.14.243.21.318.267 1.056.8 2.492.8 3.548 0 .075-.057.156-.127.319-.267.282-.243.424-.365.534-.444 1.61-1.15 3.838-.426 4.52 1.47.046.13.095.314.191.68L21 12H3Z"/> </svg>
  );
};

export default Incognito;
