import React from 'react';
import type { IconProps } from '../types';

const Mailupload01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 19.49c-1.467.02-2.929.01-4.401-.027-3.149-.079-4.723-.118-5.854-1.254-1.131-1.135-1.164-2.668-1.23-5.733a69.067 69.067 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115.11 115.11 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254 1.131 1.135 1.164 2.668 1.23 5.733.01.493.015.985.015 1.476"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 5 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 16c.491-.506 1.8-2.5 2.5-2.5m0 0c.7 0 2.009 1.994 2.5 2.5m-2.5-2.5v8"/> </svg>
  );
};

export default Mailupload01;
