import React from 'react';
import type { IconProps } from '../types';

const Bone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.86 14.454c.386-.386.87-.615 1.372-.686m0 0a2.425 2.425 0 1 1-.724 4.58c-.397-.195-.901-.21-1.214.102L4.744 22m5.488-8.232s0 0 0 0Zm0 0a2.425 2.425 0 1 0-4.58.724c.195.397.21.901-.102 1.214L2 19.256m13.14-9.71c-.386.386-.87.615-1.372.686m0 0a2.425 2.425 0 1 1 .724-4.58c.397.195.901.21 1.214-.102L19.256 2m-5.488 8.232a2.425 2.425 0 1 0 4.58-.724c-.195-.397-.21-.901.102-1.214L22 4.744M16 18v2m2-4h2M8 6V4M6 8H4"/> </svg>
  );
};

export default Bone02;
