import React from 'react';
import type { IconProps } from '../types';

const Databaseadd: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 15c-4.418 0-8-1.343-8-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3 .168 0 .335-.002.5-.006"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 8v2m0 5v2m10-.333V18m0 0v1.333M17 18h1.333M17 18h-1.333M21 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/> </svg>
  );
};

export default Databaseadd;
