import React from 'react';
import type { IconProps } from '../types';

const Hyperbole: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12h20M12 22V2m9 6a5 5 0 0 1-5-5M3 16a5 5 0 0 1 5 5"/> </svg>
  );
};

export default Hyperbole;
