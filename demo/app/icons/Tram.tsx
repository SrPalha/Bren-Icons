import React from 'react';
import type { IconProps } from '../types';

const Tram: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 2h9m0 0h5m-5 0-2 3M8 20l-1 2m9-2 1 2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5 13v-1c0-3.3 0-4.95 1.025-5.975C7.05 5 8.7 5 12 5s4.95 0 5.975 1.025C19 7.05 19 8.7 19 12v1c0 3.3 0 4.95-1.025 5.975C16.95 20 15.3 20 12 20s-4.95 0-5.975-1.025C5 17.95 5 16.3 5 13Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5 14s3.267 1 7 1 7-1 7-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 17h2m-13-9h13m-13 9h2"/> </svg>
  );
};

export default Tram;
