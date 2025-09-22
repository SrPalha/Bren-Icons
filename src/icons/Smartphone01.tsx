import React from 'react';
import type { IconProps } from '../types';

const Smartphone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 9c0-3.3 0-4.95 1.025-5.975C7.05 2 8.7 2 12 2s4.95 0 5.975 1.025C19 4.05 19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975C16.95 22 15.3 22 12 22s-4.95 0-5.975-1.025C5 19.95 5 18.3 5 15V9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m9 2 .089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5c1.224 0 1.81-.01 2.225-.378.397-.352.493-.93.686-2.088L15 2"/> </svg>
  );
};

export default Smartphone01;
