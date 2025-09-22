import React from 'react';
import type { IconProps } from '../types';

const Mailvoice02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.999 10c-.002-.325-.007-.65-.014-.976-.065-3.065-.098-4.598-1.23-5.733-1.13-1.136-2.704-1.175-5.853-1.254-1.94-.05-3.862-.05-5.802 0-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.067 69.067 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.13 1.136 2.705 1.175 5.854 1.254.802.02 1.602.032 2.4.036"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7 2.943 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7m-2.513 10.969c.609 1.037 1.831 2.006 3.498 2.006 1.667 0 2.894-.97 3.502-2.006m-3.492 2.166V22m-.022-4.88a1.817 1.817 0 0 1-1.813-1.822v-1.48c0-1.006.811-1.821 1.813-1.821 1.001 0 1.813.815 1.813 1.821v1.48a1.817 1.817 0 0 1-1.813 1.821Z"/> </svg>
  );
};

export default Mailvoice02;
