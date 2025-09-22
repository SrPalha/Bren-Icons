import React from 'react';
import type { IconProps } from '../types';

const Barcode01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4v16M7.5 4v13M12 4v13m4.5-13v13M21 4v16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 20h.009M12 20h.009m4.491 0h.009"/> </svg>
  );
};

export default Barcode01;
