import React from 'react';
import type { IconProps } from '../types';

const Noteremove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 2v2m-5-2v2M6 2v2m13.5 8.5V10c0-3.3 0-4.95-1.025-5.975C17.45 3 15.8 3 12.5 3h-3C6.2 3 4.55 3 3.525 4.025 2.5 5.05 2.5 6.7 2.5 10v5c0 3.3 0 4.95 1.025 5.975C4.55 22 6.2 22 9.5 22h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21.5 15 18 18.5m0 0L14.5 22m3.5-3.5 3.5 3.5M18 18.5 14.5 15M7 15h4m-4-5h8"/> </svg>
  );
};

export default Noteremove;
