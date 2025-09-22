import React from 'react';
import type { IconProps } from '../types';

const Lighthouse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.02 8c-.695-.933-1.877-2.238-1.416-3.524C8.91 3.621 11.007 2 12 2c.993 0 3.09 1.62 3.396 2.476.461 1.286-.722 2.591-1.416 3.524M8 8h8"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 13h8m-8.5 5h9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 8 7 22m7.5-14L17 22M5 22h14m0-14.5 2-.5m-2 3.5 2 .5M5 7.5 3 7m2 3.5L3 11"/> </svg>
  );
};

export default Lighthouse;
