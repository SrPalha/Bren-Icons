import React from 'react';
import type { IconProps } from '../types';

const Propertyview: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.998 12.503s.002-.47.002-1c0-4.48 0-6.72-1.391-8.111C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.392 2 4.783 2 7.023 2 11.502c0 4.48 0 6.72 1.391 8.112C4.558 20.781 6.321 20.97 9.5 21"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16h1m3-4h5m-9 0h1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 18.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.772 18.023c.152.213.228.32.228.477 0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477 0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023Z"/> </svg>
  );
};

export default Propertyview;
