import React from 'react';
import type { IconProps } from '../types';

const Contact02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172C21.5 4.343 21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828C19.157 22 17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967-.184-.91.237-1.8.933-2.368.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134-.03.296-.24.537-.66 1.02L9.8 11.974Zm0 0a10.356 10.356 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757.91.184 1.8-.237 2.368-.933.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436-.296.03-.537.24-1.02.66L13.526 15.7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6H2.5M5 12H2.5M5 18H2.5"/> </svg>
  );
};

export default Contact02;
