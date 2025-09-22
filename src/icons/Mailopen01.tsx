import React from 'react';
import type { IconProps } from '../types';

const Mailopen01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 19 6.913-4.71c2.526-1.72 3.648-1.72 6.174 0L22 19"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.016 14.551c.066 3.033.099 4.55 1.23 5.673 1.131 1.123 2.706 1.162 5.855 1.24 1.938.048 3.86.048 5.798 0 3.15-.078 4.724-.117 5.855-1.24 1.131-1.123 1.164-2.64 1.23-5.673a67.5 67.5 0 0 0-.05-4.459c-.042-.932-.062-1.399-.299-1.812-.236-.414-.644-.68-1.459-1.214l-3.76-2.463C14.273 3.2 13.203 2.5 12 2.5c-1.204 0-2.274.701-4.415 2.103L3.824 7.066c-.815.533-1.223.8-1.46 1.214-.236.413-.256.88-.297 1.812a67.513 67.513 0 0 0-.051 4.459Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m22 9.5-4.265 3.107C16.7 13.361 15.85 14 14.5 14M2 9.5l4.265 3.107C7.3 13.361 8.15 14 9.5 14"/> </svg>
  );
};

export default Mailopen01;
