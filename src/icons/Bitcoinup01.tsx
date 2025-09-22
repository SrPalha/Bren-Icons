import React from 'react';
import type { IconProps } from '../types';

const Bitcoinup01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm2.5-4.5C14.008 3.994 12.7 2 12 2m0 0c-.7 0-2.008 1.994-2.5 2.5M12 2v4.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M10.437 15.5h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcoinup01;
