import React from 'react';
import type { IconProps } from '../types';

const Maillock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19.5c-.966 0-1.93-.012-2.901-.037-3.149-.079-4.723-.118-5.854-1.254-1.131-1.135-1.164-2.668-1.23-5.733a69.067 69.067 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115.11 115.11 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254 1.131 1.135 1.164 2.668 1.23 5.733.01.493.015.485.015.976"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.74 15.677v-1.39c0-.206.008-.414.082-.605.195-.51.715-1.18 1.66-1.18.944 0 1.484.67 1.68 1.18.073.191.082.4.082.605v1.39M16.809 21.5h3.386c.997 0 1.805-.807 1.805-1.802v-2c0-.996-.808-1.803-1.805-1.803h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802Z"/> </svg>
  );
};

export default Maillock02;
