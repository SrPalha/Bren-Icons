import React from 'react';
import type { IconProps } from '../types';

const Mailremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.993 11c.012-.826.009-.649-.009-1.476-.065-3.065-.098-4.598-1.229-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.067 69.067 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.131 1.136 2.705 1.175 5.854 1.254.97.025 1.935.037 2.901.037m3-5 3.5 3.5m0 0 3.5 3.5M18.5 18 15 21.5m3.5-3.5 3.5-3.5"/> </svg>
  );
};

export default Mailremove02;
