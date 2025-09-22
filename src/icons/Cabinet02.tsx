import React from 'react';
import type { IconProps } from '../types';

const Cabinet02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 16 5 20m12.5-4 1.5 4m2-16H3l.215 5.16c.135 3.238.202 4.857 1.071 5.848.869.992 2.22.992 4.921.992h5.585c2.702 0 4.053 0 4.922-.992.869-.991.936-2.61 1.071-5.848L21 4Zm-9 12V4m10 0H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.009M15 10h.009"/> </svg>
  );
};

export default Cabinet02;
