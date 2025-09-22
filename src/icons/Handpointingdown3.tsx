import React from 'react';
import type { IconProps } from '../types';

const Handpointingdown3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 16h1a2 2 0 0 0 2-2m0 0v-1m0 1a1 1 0 0 0 1 1 2 2 0 0 0 2-2m0 0v-1m0 1c0 .524.47.922.987.836l.342-.057a2 2 0 0 0 1.671-1.973v-1.473c0-2.173 0-3.26-.331-4.125-.192-.502-.699-1.142-1.104-1.604a2.2 2.2 0 0 1-.565-1.44V2m-7 12v6.5a1.5 1.5 0 1 1-3 0v-9.962l-1.62 1.625a1.683 1.683 0 0 1-2.51-.14 1.696 1.696 0 0 1-.033-2.072l3.6-4.598C8.626 4.473 9 3.117 9 2"/> </svg>
  );
};

export default Handpointingdown3;
