import React from 'react';
import type { IconProps } from '../types';

const Mailadd02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 19.5s-1.43-.012-2.401-.037c-3.149-.079-4.723-.118-5.854-1.254-1.131-1.135-1.164-2.668-1.23-5.733a69.067 69.067 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115.11 115.11 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254 1.131 1.135 1.164 2.668 1.23 5.733.007.357.012.976.014 1.476M14 17.5h8m-4 4v-8"/> </svg>
  );
};

export default Mailadd02;
