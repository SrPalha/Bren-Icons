import React from 'react';
import type { IconProps } from '../types';

const Computerdesk02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12H2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M17 12V8c0-.827.173-1 1-1h1c.827 0 1 .173 1 1v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 17h-4c-1.886 0-2.828 0-3.414-.586C12 15.828 12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6Zm6.5 3 .5 3M6.5 9 6 12"/> </svg>
  );
};

export default Computerdesk02;
