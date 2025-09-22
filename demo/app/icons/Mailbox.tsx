import React from 'react';
import type { IconProps } from '../types';

const Mailbox: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 19V8.5a6.5 6.5 0 0 1 13 0V19m.369 3H5.13c-.611 0-.917 0-1.061-.208-.145-.207-.048-.508.145-1.108C4.56 19.608 4.909 19 6.149 19h11.702c1.24 0 1.588.608 1.934 1.684.193.6.29.9.145 1.108-.144.208-.45.208-1.061.208ZM10.5 11h3m-9-3h15"/> </svg>
  );
};

export default Mailbox;
