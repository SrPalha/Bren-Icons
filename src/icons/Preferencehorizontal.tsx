import React from 'react';
import type { IconProps } from '../types';

const Preferencehorizontal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 4H3m8 15H3m18 0h-4m4-7.5H11M21 4h-2M5 11.5H3M14.5 2c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C15.199 6 14.966 6 14.5 6s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 5.199 13 4.966 13 4.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 2 14.034 2 14.5 2Zm-2 15c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C11 20.199 11 19.966 11 19.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077Zm-3-7.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 12.699 8 12.466 8 12v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077Z"/> </svg>
  );
};

export default Preferencehorizontal;
