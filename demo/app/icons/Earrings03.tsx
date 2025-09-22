import React from 'react';
import type { IconProps } from '../types';

const Earrings03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM7 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7H3m18 10H11M5 4.5c.275-1.572 3 .924 3 2.5s-2.725 4.072-3 2.5m14 5c-.275-1.572-3 .924-3 2.5s2.725 4.072 3 2.5"/> </svg>
  );
};

export default Earrings03;
