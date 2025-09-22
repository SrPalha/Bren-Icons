import React from 'react';
import type { IconProps } from '../types';

const Tropicalstormtracks2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m12.156 7.231-.868-1.071 2.924-1.91C4.589 2.73 3.155 8.64 3.097 8.904l-.006.026-.009.035a4.859 4.859 0 0 0-.053 2.318c.17.768.522 1.491 1.03 2.109l.867 1.071L2 16.375c9.623 1.529 11.059-4.391 11.118-4.656l.005-.026.01-.035a4.858 4.858 0 0 0 .052-2.318 5.039 5.039 0 0 0-1.029-2.109Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.106 12.544a2.23 2.23 0 1 0 0-4.462 2.23 2.23 0 0 0 0 4.462Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 7v5.5A7.5 7.5 0 0 1 12 20m7.5-13c.7 0 2.009 1.994 2.5 2.5M19.5 7c-.7 0-2.009 1.994-2.5 2.5"/> </svg>
  );
};

export default Tropicalstormtracks2;
