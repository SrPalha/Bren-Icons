import React from 'react';
import type { IconProps } from '../types';

const Mailminus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 20.499c-.799-.004-1.598-.015-2.401-.036-3.149-.079-4.723-.118-5.854-1.254-1.131-1.135-1.164-2.668-1.23-5.733a69.066 69.066 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 3.655 5.95 3.616 9.099 3.537a115.11 115.11 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254 1.131 1.135 1.164 2.668 1.23 5.733.017.827.02 1.65.008 2.476"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 6 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 18.5h8"/> </svg>
  );
};

export default Mailminus01;
