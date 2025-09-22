import React from 'react';
import type { IconProps } from '../types';

const Userminus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715A10.647 10.647 0 0 1 15 14.78"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 18.5h7"/> </svg>
  );
};

export default Userminus01;
