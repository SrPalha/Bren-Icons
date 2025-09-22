import React from 'react';
import type { IconProps } from '../types';

const Navigator2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4H3m18 16H3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.135 9.661C9.045 10.671 10 11.176 10 12c0 .824-.955 1.33-2.865 2.339l-1.301.688c-1.467.775-2.2 1.163-2.553.881a.83.83 0 0 1-.229-.292c-.206-.432.21-1.225 1.042-2.812.184-.352.277-.528.293-.72a.984.984 0 0 0 0-.168c-.016-.192-.109-.368-.293-.72-.832-1.587-1.248-2.38-1.042-2.812a.83.83 0 0 1 .229-.292c.353-.282 1.086.106 2.553.881l1.3.688Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12h-2m-4 0h-2"/> </svg>
  );
};

export default Navigator2;
