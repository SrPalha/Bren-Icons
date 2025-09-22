import React from 'react';
import type { IconProps } from '../types';

const Cloudloading: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 9h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 9A5.5 5.5 0 1 0 6.52 8.023M17.477 9a5.475 5.475 0 0 1-1.235 3M6.52 8.023A4.978 4.978 0 0 1 10 9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 21h2m3 0h2m3 0h2"/> </svg>
  );
};

export default Cloudloading;
