import React from 'react';
import type { IconProps } from '../types';

const Rocket: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 10.167 4.123-4.124c1.125-1.124 1.688-1.687 2.308-2.14A9.9 9.9 0 0 1 18.74 2.12C19.498 2 20.293 2 21.884 2c.083 0 .115.038.115.115 0 1.59 0 2.386-.119 3.145a9.9 9.9 0 0 1-1.784 4.309c-.453.62-1.016 1.183-2.14 2.308L13.833 16"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10.341 8.098c-1.703 0-3.843-.36-5.437.3C3.737 8.88 2.878 10 2 10.878l3.306 1.418c.876.375.34 1.48.195 2.206-.161.808-.152.838.43 1.42l2.147 2.146c.582.583.612.592 1.42.43.725-.145 1.831-.68 2.206.196L13.121 22c.878-.878 1.998-1.737 2.481-2.904.66-1.594.3-3.734.3-5.437"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 20-1 1m-7-9-1 1"/>   <path stroke="#1B1C1B" strokeLinecap="square" strokeWidth="1.5" d="M15 4.08c1.2.18 2.46.66 3.161 1.38.897.792 1.519 1.86 1.759 3.54"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.94 6.06 16.5 7.5"/> </svg>
  );
};

export default Rocket;
