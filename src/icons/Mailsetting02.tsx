import React from 'react';
import type { IconProps } from '../types';

const Mailsetting02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19.5s-.93-.012-1.901-.037c-3.149-.079-4.723-.118-5.854-1.254-1.131-1.135-1.164-2.668-1.23-5.733a69.067 69.067 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115.11 115.11 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254 1.131 1.135 1.164 2.668 1.23 5.733.007.357.012.976.014 1.476"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 20.214V21.5m0-1.286a3.364 3.364 0 0 1-2.774-1.43M18 20.213a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L14 19.57m1.226-.788a3.12 3.12 0 0 1 0-3.566m5.548 3.566L22 19.57m-1.226-.788a3.12 3.12 0 0 0 0-3.566M18 13.786c1.157 0 2.176.568 2.774 1.43M18 13.787a3.364 3.364 0 0 0-2.774 1.43M18 13.787V12.5m2.774 2.717L22 14.429m-6.774.788L14 14.429"/> </svg>
  );
};

export default Mailsetting02;
