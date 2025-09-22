import React from 'react';
import type { IconProps } from '../types';

const Computerdesk01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12H2m18 5h-4c-1.886 0-2.828 0-3.414-.586C12 15.828 12 14.886 12 13v-1m-8 0v10m16-10v10M7 6V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2h4c1.414 0 2.121 0 2.56.44C17 2.878 17 3.585 17 5v1c0 1.414 0 2.121-.44 2.56C16.122 9 15.415 9 14 9h-4c-1.414 0-2.121 0-2.56-.44C7 8.122 7 7.415 7 6Zm6.5 3 .5 3m-3.5-3-.5 3"/> </svg>
  );
};

export default Computerdesk01;
