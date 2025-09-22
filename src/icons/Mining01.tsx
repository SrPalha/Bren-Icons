import React from 'react';
import type { IconProps } from '../types';

const Mining01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.874-9a4 4 0 1 0-7.748 0m9.625-4.992A4 4 0 0 1 18.874 8M16 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 19h-4m8 0c.247 0 .448.007.555 0a3.031 3.031 0 0 0 2.786-2.52c.017-.103.028-.225.05-.468l.538-5.83c.094-1.02.14-1.53-.16-1.856C21.466 8 20.948 8 19.91 8H4.09c-1.038 0-1.556 0-1.857.326-.302.325-.255.835-.16 1.855l.536 5.831c.023.243.034.365.05.469.227 1.374 1.458 2.414 2.865 2.512.106.007.23.007.477.007"/> </svg>
  );
};

export default Mining01;
