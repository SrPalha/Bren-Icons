import React from 'react';
import type { IconProps } from '../types';

const Burjalarab: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18M7 22V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 4c5.675.961 10 5.943 10 11.944 0 2.206-.584 4.274-1.605 6.056"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 9h12M7 13h4m-4 4h4"/> </svg>
  );
};

export default Burjalarab;
