import React from 'react';
import type { IconProps } from '../types';

const Realestate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 22V7.485c0-1.098 0-1.646-.316-2.11-.315-.463-.896-.767-2.059-1.376l-1.48-.774c-1.824-.956-2.737-1.434-3.44-1.138C13 2.383 13 3.245 13 4.967V9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 22H2M21 8h-2m2 3h-2m2 3h-2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 13c0-1.886 0-2.828.586-3.414C9.172 9 10.114 9 12 9c1.886 0 2.828 0 3.414.586C16 10.172 16 11.114 16 13v9H8v-9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 13h1m-1 3h1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 16c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.5 16v6"/> </svg>
  );
};

export default Realestate02;
