import React from 'react';
import type { IconProps } from '../types';

const Litecoin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.5 6.5-1.343 4.795m0 0-.86 3.072c-.273.977-.41 1.466-.17 1.8.24.333.729.333 1.706.333H15.5m-5.343-5.205L7.5 12.333m2.657-1.038L13.9 9.833"/> </svg>
  );
};

export default Litecoin;
