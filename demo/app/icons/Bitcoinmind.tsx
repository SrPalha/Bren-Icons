import React from 'react';
import type { IconProps } from '../types';

const Bitcoinmind: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 22v-.5c0-1.105.932-2 1.922-2.489.963-.476 1.772-1.26 1.875-2.18L19.5 15l2-1-2.5-3.75a8.25 8.25 0 1 0-13 6.746m0 0V22m0-5.004c.75.53 1.594.937 2.5 1.194"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.938 12.667V7.333m1.562 0V6m0 8v-1.333M8.937 10h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H8M12.063 10c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H8"/> </svg>
  );
};

export default Bitcoinmind;
