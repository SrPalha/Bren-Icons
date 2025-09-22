import React from 'react';
import type { IconProps } from '../types';

const Prescription: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19 21-9-9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19V5c0-1.655.345-2 2-2h2.5a4.5 4.5 0 1 1 0 9H5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19 15-6 6"/> </svg>
  );
};

export default Prescription;
