import React from 'react';
import type { IconProps } from '../types';

const Mobileprogramming02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 6c.087-1.42.326-2.323.982-2.975C7.015 2 8.677 2 12 2s4.985 0 6.017 1.025c.657.652.896 1.556.983 2.975m0 12c-.087 1.42-.326 2.323-.983 2.975C16.985 22 15.323 22 12 22c-3.323 0-4.985 0-6.018-1.025C5.326 20.323 5.087 19.419 5 18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2m4.5-10 1.533 1.586c.645.666.967 1 .967 1.414 0 .414-.322.748-.967 1.414L17.5 15m-11-6-1.533 1.586C4.322 11.252 4 11.586 4 12c0 .414.322.748.967 1.414L6.5 15"/> </svg>
  );
};

export default Mobileprogramming02;
