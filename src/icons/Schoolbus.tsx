import React from 'react';
import type { IconProps } from '../types';

const Schoolbus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 19v3m-11-3v3"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3c0 2.828 0 4.243-.879 5.121C18.243 19 16.828 19 14 19h-4c-2.828 0-4.243 0-5.121-.879C4 17.243 4 15.828 4 13v-3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16h1m8 0h1M2 8v2m20-2v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.5 5h15m-15 8h15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V5"/> </svg>
  );
};

export default Schoolbus;
