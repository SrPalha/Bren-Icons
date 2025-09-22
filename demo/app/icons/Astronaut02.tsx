import React from 'react';
import type { IconProps } from '../types';

const Astronaut02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13c2.21 0 4-1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3Zm-7 0a3 3 0 0 1-3-3c0-1.657 0-3 3-3m14 6a3 3 0 0 0 3-3c0-1.657 0-3-3-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 7V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 21a1 1 0 0 0 1-1 3 3 0 0 0-3-3H8a3 3 0 0 0-3 3 1 1 0 0 0 1 1h12Z"/> </svg>
  );
};

export default Astronaut02;
