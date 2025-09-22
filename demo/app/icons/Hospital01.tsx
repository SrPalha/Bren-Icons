import React from 'react';
import type { IconProps } from '../types';

const Hospital01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 2v2m0 0v2m0-2h-4m0 0V2m0 2v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22V11.38c0-3.503 0-5.255 1.153-6.344C4.886 4.344 5.903 4.092 7.5 4M21 22V11.38c0-3.503 0-5.255-1.153-6.344-.733-.692-1.75-.944-3.347-1.036"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 10h2m-2 4h2m-9 0h2m-2-4h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 22h7.5M22 22h-7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.5 22v-2.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 17 11.065 17 12 17s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75V22"/> </svg>
  );
};

export default Hospital01;
