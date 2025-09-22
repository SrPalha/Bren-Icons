import React from 'react';
import type { IconProps } from '../types';

const Bitcoindown01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM9.5 19.5c.492.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.008-1.994 2.5-2.5M12 22v-4.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 11.167V5.833m1.562 0V4.5m0 8v-1.333M10.437 8.5h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 8.5c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcoindown01;
