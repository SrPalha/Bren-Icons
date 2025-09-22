import React from 'react';
import type { IconProps } from '../types';

const Api: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 13.5 7.5 9l1.875 4.5M6 13.5 5.5 15m.5-1.5h3.375m0 0L10 15m2.5-3V9.7c0-.186 0-.28.024-.355a.5.5 0 0 1 .322-.32C12.92 9 13.013 9 13.2 9h1.3a1.5 1.5 0 0 1 0 3h-2Zm0 0v3m6-6v6"/> </svg>
  );
};

export default Api;
