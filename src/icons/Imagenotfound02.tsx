import React from 'react';
import type { IconProps } from '../types';

const Imagenotfound02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.898 13c-2.817 1.888-4.79 5.04-7 8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.776 3.5C2.5 4.934 2.5 7.233 2.5 11.745c0 4.599 0 6.898 1.35 8.327C5.2 21.5 7.373 21.5 11.719 21.5c4.253 0 6.425-.172 7.781-1.512"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 12.014c1.54-.106 3.196.318 4.997 1.606m0 0c.003-.505.003-1.044.003-1.62 0-4.478 0-6.718-1.391-8.109C18.717 2.5 16.479 2.5 12 2.5c-2.41 0-4.17 0-5.5.217M21.497 13.62c-.01 1.607-.049 2.868-.214 3.88M2 2l20 20"/> </svg>
  );
};

export default Imagenotfound02;
