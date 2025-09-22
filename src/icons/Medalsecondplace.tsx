import React from 'react';
import type { IconProps } from '../types';

const Medalsecondplace: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 15c0-3.866 3.022-7 6.75-7h.5C15.978 8 19 11.134 19 15s-3.022 7-6.75 7h-.5C8.022 22 5 18.866 5 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.3" d="M10.5 13.118c.08-.785.608-1.118 1.158-1.118h.666c.55 0 1.077.333 1.157 1.118a3.9 3.9 0 0 1 0 .764c-.049.478-.627 1.027-.627 1.027L12 15.5s-1.5 1-1.5 2c0 .54.437.5.977.5h2.004"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.56 2 11 7.898M18 2l-2.821 6.5M10.44 2 12 5.594M6 2l2.821 6.5"/> </svg>
  );
};

export default Medalsecondplace;
