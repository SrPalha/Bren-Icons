import React from 'react';
import type { IconProps } from '../types';

const Maildownload01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11c0-.491-.005-.983-.016-1.476-.065-3.065-.098-4.598-1.229-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.067 69.067 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.472.037 2.934.046 4.401.027"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 5 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 19c.491.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.009-1.994 2.5-2.5m-2.5 2.5v-8"/> </svg>
  );
};

export default Maildownload01;
