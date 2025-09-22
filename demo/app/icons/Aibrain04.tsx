import React from 'react';
import type { IconProps } from '../types';

const Aibrain04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4.5a3 3 0 0 0-2.567 4.553 3.001 3.001 0 0 0 0 5.893M7 4.5a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-5 0 3 3 0 0 1-2.567-4.553M7 4.5c0 .818.393 1.544 1 2m-3.567 8.447A3.01 3.01 0 0 1 6 13.67m13.25-8.92L17 7h-2m3.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75 14.5L17 17h-2m3.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.75-7.25H15m3.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/> </svg>
  );
};

export default Aibrain04;
