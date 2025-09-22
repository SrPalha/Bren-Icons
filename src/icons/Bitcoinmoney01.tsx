import React from 'react';
import type { IconProps } from '../types';

const Bitcoinmoney01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 4H8c-2.828 0-4.243 0-5.121.937C2 5.875 2 7.383 2 10.4v3.2c0 3.017 0 4.525.879 5.463C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.937C22 18.125 22 16.617 22 13.6v-3.2c0-3.017 0-4.525-.879-5.463C20.243 4 18.828 4 16 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.874 4A4 4 0 0 1 2 8.874m20 0A4 4 0 0 1 17.126 4m0 16A4 4 0 0 1 22 15.126m-20 0A4 4 0 0 1 6.874 20m3.564-5.333V9.333m1.562 0V8m0 8v-1.333M10.437 12h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcoinmoney01;
