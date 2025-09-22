import React from 'react';
import type { IconProps } from '../types';

const Shoppingbagremove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.5 11.502C18.48 8.48 17.204 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.74-.973 3.377-1.46 5.067-.95 6.376a4.35 4.35 0 0 0 1.588 2C5.035 21.474 7.968 21.944 11 22m3-7 3.5 3.5m0 0L21 22m-3.5-3.5L14 22m3.5-3.5L21 15m-10.5-4h2"/> </svg>
  );
};

export default Shoppingbagremove;
