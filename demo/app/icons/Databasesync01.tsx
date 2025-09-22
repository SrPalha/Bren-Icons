import React from 'react';
import type { IconProps } from '../types';

const Databasesync01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 15.5 1.136 1.465a4 4 0 0 1 7.364-.901m1.5 4.434-1.136-1.463a4 4 0 0 1-7.328.965M18 5v6.008M2 5v14.02c0 1.53 3.054 2.794 7 2.98"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12c0 1.542 3.054 2.814 7 3"/> </svg>
  );
};

export default Databasesync01;
