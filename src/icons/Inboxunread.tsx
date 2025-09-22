import React from 'react';
import type { IconProps } from '../types';

const Inboxunread: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12v.5c0 4.478 0 6.718-1.391 8.109C18.217 22 15.979 22 11.5 22c-4.478 0-6.718 0-8.109-1.391C2 19.217 2 16.979 2 12.5c0-4.478 0-6.718 1.391-8.109S7.021 3 11.5 3h.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 14h-4.926c-.842 0-1.503.704-1.875 1.447C13.796 16.255 12.99 17 11.5 17c-1.489 0-2.296-.745-2.7-1.553C8.43 14.704 7.769 14 6.927 14H2"/> </svg>
  );
};

export default Inboxunread;
