import React from 'react';
import type { IconProps } from '../types';

const Inboxdownload: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 2.5c-1.407.165-2.376.515-3.109 1.254C2.5 5.156 2.5 7.412 2.5 11.926c0 4.513 0 6.77 1.391 8.172C5.282 21.5 7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.402s1.391-3.659 1.391-8.172c0-4.514 0-6.77-1.391-8.172-.733-.74-1.702-1.089-3.109-1.254"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 8c.492.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.008-1.994 2.5-2.5M12 10.5v-8"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 13.5h-4.926c-.842 0-1.503.704-1.875 1.447-.403.808-1.21 1.553-2.699 1.553-1.489 0-2.296-.745-2.7-1.553-.37-.743-1.032-1.447-1.874-1.447H2.5"/> </svg>
  );
};

export default Inboxdownload;
