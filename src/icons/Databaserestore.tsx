import React from 'react';
import type { IconProps } from '../types';

const Databaserestore: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.842 13 .57 2.345-.947-.583a4.035 4.035 0 0 0-2.425-.804c-2.231 0-4.04 1.8-4.04 4.02C13 20.2 14.809 22 17.04 22A4.037 4.037 0 0 0 21 18.783M19 5v5M3 5v14c0 1.657 3.582 3 8 3 .085 0 .17 0 .254-.002"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 12c0 1.616 3.407 2.934 7.675 2.998"/> </svg>
  );
};

export default Databaserestore;
