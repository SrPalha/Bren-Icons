import React from 'react';
import type { IconProps } from '../types';

const Preferencevertical: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 11v10m15-8v8m0-18v4m-7.5-4v10M4 3v2m7.5 14v2M2 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 8 3.034 8 3.5 8h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 8.801 6 9.034 6 9.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 11 4.966 11 4.5 11h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 10.199 2 9.966 2 9.5Zm15 2c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C17 12.199 17 11.966 17 11.5Zm-7.5 3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C10.301 13 10.534 13 11 13h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C12.699 16 12.466 16 12 16h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883Z"/> </svg>
  );
};

export default Preferencevertical;
