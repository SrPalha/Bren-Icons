import React from 'react';
import type { IconProps } from '../types';

const Blockchain04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.44 8.56C3.878 9 4.585 9 6 9c1.414 0 2.121 0 2.56-.44C9 8.122 9 7.415 9 6c0-1.414 0-2.121-.44-2.56C8.122 3 7.415 3 6 3c-1.414 0-2.121 0-2.56.44C3 3.878 3 4.585 3 6c0 1.414 0 2.121.44 2.56Zm12 0C15.878 9 16.585 9 18 9c1.414 0 2.121 0 2.56-.44C21 8.122 21 7.415 21 6c0-1.414 0-2.121-.44-2.56C20.122 3 19.415 3 18 3c-1.414 0-2.121 0-2.56.44C15 3.878 15 4.585 15 6c0 1.414 0 2.121.44 2.56Zm0 12c.439.44 1.146.44 2.56.44 1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56 0-1.414 0-2.121-.44-2.56C20.122 15 19.415 15 18 15c-1.414 0-2.121 0-2.56.44C15 15.878 15 16.585 15 18c0 1.414 0 2.121.44 2.56Zm-12 0C3.878 21 4.585 21 6 21c1.414 0 2.121 0 2.56-.44C9 20.122 9 19.415 9 18c0-1.414 0-2.121-.44-2.56C8.122 15 7.415 15 6 15c-1.414 0-2.121 0-2.56.44C3 15.878 3 16.585 3 18c0 1.414 0 2.121.44 2.56ZM12 6H9m6 12h-3m6-6V9M6 15v-3"/> </svg>
  );
};

export default Blockchain04;
