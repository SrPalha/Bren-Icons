import React from 'react';
import type { IconProps } from '../types';

const Electrichome01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8.585V13.5c0 3.772 0 5.657-1.172 6.829-.808.808-1.956 1.059-3.828 1.136M4 8.585V13.5c0 3.772 0 5.657 1.172 6.829 1.063 1.063 2.714 1.161 5.828 1.17a.998.998 0 0 0 1-.999v-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m22 10.5-4.343-4.165C14.99 3.778 13.657 2.5 12 2.5S9.01 3.778 6.343 6.335L2 10.5M14.001 9v2.5m-4 0V9m-1.495 3.38c-.04-.475.37-.88.89-.88h5.214c.52 0 .93.405.89.88l-.107 1.297a5.164 5.164 0 0 1-.98 2.61l-.35.483c-.331.456-.889.73-1.486.73h-1.148c-.597 0-1.155-.274-1.486-.73l-.35-.482a5.163 5.163 0 0 1-.98-2.61l-.107-1.298Z"/> </svg>
  );
};

export default Electrichome01;
