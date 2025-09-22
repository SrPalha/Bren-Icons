import React from 'react';
import type { IconProps } from '../types';

const Gitfork: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.017 8.74c0 1.674-.242 3.46 3.204 3.245h2.784m0 0h3.781c1.134-.22 2.34 0 2.207-3.409m-5.988 3.41V15.7"/> </svg>
  );
};

export default Gitfork;
