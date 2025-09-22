import React from 'react';
import type { IconProps } from '../types';

const Bus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20.5V22M7 20.5V22"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 6.782c0-.64 0-.96.174-1.348.174-.39.35-.548.703-.864C6.034 3.533 8.36 2 12 2s5.966 1.533 7.123 2.57c.353.316.53.474.703.864.174.389.174.709.174 1.348V14c0 2.828 0 4.243-.879 5.121C18.243 20 16.828 20 14 20h-4c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V6.782Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 14s3.733 1 8 1c4.267 0 8-1 8-1M4.5 17.5H6m12 0h1.5m-8.5 0h2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 9v1m20-1v1"/> </svg>
  );
};

export default Bus01;
