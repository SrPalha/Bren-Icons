import React from 'react';
import type { IconProps } from '../types';

const Userblock01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715a10.665 10.665 0 0 1 7.922-1.187"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m16.05 16.05 4.9 4.9M22 18.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/> </svg>
  );
};

export default Userblock01;
