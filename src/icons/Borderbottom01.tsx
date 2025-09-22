import React from 'react';
import type { IconProps } from '../types';

const Borderbottom01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 17.5c.199 1.094.55 1.899 1.17 2.535C5.1 21.5 7.4 21.5 12 21.5s6.9 0 8.33-1.465c.62-.636.972-1.441 1.17-2.535M2.751 6.31c.194-1.042.536-1.809 1.14-2.415.605-.606 1.37-.95 2.409-1.143M2.505 14c-.005-.586-.005-1.288-.005-1.974 0-.686 0-1.45.005-2.037M10.1 2.505C10.684 2.5 11.316 2.5 12 2.5c.684 0 1.316 0 1.9.005m3.8.247c1.04.194 1.804.537 2.409 1.143.604.606.946 1.373 1.14 2.415m.246 7.69c.005-.586.005-1.288.005-1.974 0-.686 0-1.45-.005-2.037M2.5 12H4m16 0h1.5M12 15V9m0-4.531V3m-3 9h6"/> </svg>
  );
};

export default Borderbottom01;
