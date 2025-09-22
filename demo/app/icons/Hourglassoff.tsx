import React from 'react';
import type { IconProps } from '../types';

const Hourglassoff: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 5.02a6.996 6.996 0 0 0 7 6.992c-3.866 0-7 3.13-7 6.993V22m14-2.996V22m0 .002H4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2.022 20 19.98M6.563 1.998h13.5m-4.022 8.99c.67-.55 2.168-1.664 2.783-4.189.273-1.124.203-3.201.203-4.801"/> </svg>
  );
};

export default Hourglassoff;
