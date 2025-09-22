import React from 'react';
import type { IconProps } from '../types';

const Bookmarkblock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12.5v5.48c0 2.307 0 3.46-.773 3.872-1.497.8-4.304-1.867-5.637-2.67-.773-.465-1.16-.698-1.59-.698-.43 0-.817.233-1.59.698-1.333.803-4.14 3.47-5.637 2.67C3 21.44 3 20.287 3 17.981V9.708c0-3.634 0-5.45 1.172-6.58C5.235 2.106 6.886 2.01 10 2.002"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m13.2 3.2 5.6 5.6M20 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/> </svg>
  );
};

export default Bookmarkblock02;
