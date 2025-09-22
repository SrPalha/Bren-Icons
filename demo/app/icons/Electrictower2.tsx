import React from 'react';
import type { IconProps } from '../types';

const Electrictower2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 2H9v5h6V2Zm4.5 20h-15L9 7h6l4.5 15ZM2 22h20M3 7h18M3 7v2m0-2 6-5m12 5v2m0-2-6-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.5 9.5-8.5 5L18.5 20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.5 9.5 8.5 5L5.5 20"/> </svg>
  );
};

export default Electrictower2;
