import React from 'react';
import type { IconProps } from '../types';

const Treadmill02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.868 19H3.32C2.59 19 2 18.397 2 17.653c0-.556.334-1.055.841-1.256L15.6 11.33c3.08-1.222 6.4 1.098 6.4 4.47 0 1.769-1.402 3.2-3.132 3.2ZM18 15h.009M6 15 4 9m1 0H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 11 2-6c1.592 0 2.606-.423 3-2M6 19l-1 2m13-2v2"/> </svg>
  );
};

export default Treadmill02;
