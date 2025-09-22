import React from 'react';
import type { IconProps } from '../types';

const Bitcoincircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 12h4.2M9 12V9.296c0-.471 0-.707.146-.853.147-.147.383-.147.854-.147h3.2c.994 0 1.8.83 1.8 1.852C15 11.171 14.194 12 13.2 12M9 12v2.704c0 .471 0 .707.146.853.147.147.383.147.854.147h3.2c.994 0 1.8-.83 1.8-1.852C15 12.829 14.194 12 13.2 12m-2.706-3.704V7m0 10v-1.296m2.404-7.408V7m0 10v-1.296"/> </svg>
  );
};

export default Bitcoincircle;
