import React from 'react';
import type { IconProps } from '../types';

const Smartphone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 6c-.08-1.42-.303-2.323-.912-2.975C16.629 2 15.086 2 12 2 8.914 2 7.371 2 6.412 3.025 5.803 3.677 5.581 4.581 5.5 6m13 12c-.08 1.42-.303 2.323-.912 2.975C16.629 22 15.086 22 12 22c-3.086 0-4.629 0-5.588-1.025-.609-.652-.831-1.556-.912-2.975"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m9 2 .089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5c1.224 0 1.81-.01 2.225-.378.397-.352.493-.93.686-2.088L15 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2M4 8.5s1 .346 1 1.313c0 .966-1 1.22-1 2.187 0 .966 1 1.221 1 2.188 0 .966-1 1.312-1 1.312m16-7s-1 .346-1 1.313c0 .966 1 1.22 1 2.187 0 .966-1 1.221-1 2.188 0 .966 1 1.312 1 1.312"/> </svg>
  );
};

export default Smartphone02;
