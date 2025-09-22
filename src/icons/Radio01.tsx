import React from 'react';
import type { IconProps } from '../types';

const Radio01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 5c3.771 0 5.657 0 6.828 1.245C22 7.49 22 9.493 22 13.5s0 6.01-1.172 7.255C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.245C2 19.51 2 17.507 2 13.5s0-6.01 1.172-7.255C4.343 5 6.229 5 10 5h4Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.396 11.25a4.5 4.5 0 0 1-7.792 4.5m7.793-4.5a4.5 4.5 0 0 0-7.793 4.5m7.793-4.5-7.793 4.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 2 7 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9h.009"/> </svg>
  );
};

export default Radio01;
