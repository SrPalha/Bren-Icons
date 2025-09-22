import React from 'react';
import type { IconProps } from '../types';

const Cloudserver: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 8h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 8A5.5 5.5 0 1 0 6.52 7.023M17.477 8a5.475 5.475 0 0 1-1.235 3M6.52 7.023A4.978 4.978 0 0 1 10 8m4 12.75v-.25a1 1 0 0 0-1-1h-1m2 1.25V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.25m4 0h5m-7-1.25h-1a1 1 0 0 0-1 1v.25m2-1.25V17m-2 3.75H5"/> </svg>
  );
};

export default Cloudserver;
