import React from 'react';
import type { IconProps } from '../types';

const Filebitcoin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.002 17.5h3.5m-3.5 0V15c0-.471 0-.707.146-.854.147-.146.383-.146.854-.146h1m-2 3.5V20c0 .471 0 .707.146.854.147.146.383.146.854.146h1m1.5-3.5c.828 0 1.5-.784 1.5-1.75S20.33 14 19.502 14h-1.5m1.5 3.5c.828 0 1.5.784 1.5 1.75S20.33 21 19.502 21h-1.5m0-7v-1m0 8v1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 22h-2.273c-3.26 0-4.892 0-6.024-.798a4.134 4.134 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252 1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.667 1.667 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"/> </svg>
  );
};

export default Filebitcoin;
