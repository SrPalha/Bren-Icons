import React from 'react';
import type { IconProps } from '../types';

const Mailvoice01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 4.5 6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 4.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.998 9.996a69.11 69.11 0 0 0-.014-.975c-.065-3.064-.098-4.596-1.229-5.731-1.131-1.135-2.705-1.174-5.854-1.253a115.18 115.18 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.253-1.131 1.135-1.164 2.667-1.23 5.73a68.999 68.999 0 0 0 0 2.95c.066 3.065.099 4.597 1.23 5.732 1.131 1.134 2.705 1.174 5.854 1.253.803.02 1.602.032 2.401.036"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.486 17.969a4.074 4.074 0 0 0 3.516 2.006c1.675 0 2.908-.97 3.52-2.006m-3.51 2.166V22m-.023-4.88a1.822 1.822 0 0 1-1.822-1.822v-1.48a1.822 1.822 0 0 1 3.645 0v1.48a1.822 1.822 0 0 1-1.823 1.821Z"/> </svg>
  );
};

export default Mailvoice01;
