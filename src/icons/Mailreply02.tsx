import React from 'react';
import type { IconProps } from '../types';

const Mailreply02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11c0-.491-.005-.983-.016-1.476-.065-3.065-.098-4.598-1.229-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.067 69.067 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.131 1.136 2.705 1.175 5.854 1.254.97.025 1.935.037 2.901.037"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5m5 14c-.116-2.524-.013-3.443-1.656-4.62-.808-.58-2.432-.961-4.626-.755m1.734-2.532-2.297 2.153a.502.502 0 0 0-.003.706l2.3 2.188"/> </svg>
  );
};

export default Mailreply02;
