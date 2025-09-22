import React from 'react';
import type { IconProps } from '../types';

const Mailsend01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12.5c0-.491-.005-1.483-.016-1.976-.065-3.065-.098-4.598-1.229-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.066 69.066 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.131 1.136 2.705 1.175 5.854 1.254.803.02 1.602.032 2.401.036"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 6 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 17.5h-8m8 0c0-.7-1.994-2.008-2.5-2.5m2.5 2.5c0 .7-1.994 2.009-2.5 2.5"/> </svg>
  );
};

export default Mailsend01;
