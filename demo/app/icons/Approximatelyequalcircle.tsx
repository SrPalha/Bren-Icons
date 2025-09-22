import React from 'react';
import type { IconProps } from '../types';

const Approximatelyequalcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 9.285c1.667-2 3.333-1.414 5 .048 1.667 1.463 3.333 2.048 5 .049M7 14.618c1.667-2 3.333-1.414 5 .049 1.667 1.463 3.333 2.048 5 .048"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Approximatelyequalcircle;
