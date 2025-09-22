import React from 'react';
import type { IconProps } from '../types';

const Building04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M11 2v12c0 3.31-.69 4-4 4H3m2-6h6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 16h1m-1 3h1M14 5v17H4.279c-1.241 0-1.862 0-2.148-.425-.286-.426-.075-1.035.347-2.254L7.782 3.98c.331-.958.497-1.436.868-1.709C9.022 2 9.51 2 10.484 2h.643c1.354 0 2.032 0 2.452.44C14 2.878 14 3.585 14 5Zm0 5 3.79 1.184c2.03.635 3.044.952 3.627 1.745.583.793.583 1.856.583 3.982V20c0 .943 0 1.414-.293 1.707C21.414 22 20.943 22 20 22h-6"/> </svg>
  );
};

export default Building04;
