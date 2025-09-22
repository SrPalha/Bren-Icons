import React from 'react';
import type { IconProps } from '../types';

const Masklove1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M3.164 13.98c1.165-.223 3.313-2.168 2.835-5.98 1.466-.613 3.611-1 6-1 2.39 0 4.534.387 6 1 0 2.542.603 4.108 1.328 5a2.402 2.402 0 0 0-1.362.474c-.26.193-.39.289-.466.289-.076 0-.206-.096-.465-.289-.633-.469-1.686-.764-2.893-.032-1.299.787-1.773 3.057.114 5.322-.727.155-1.481.236-2.256.236-3.784 0-7.096-1.947-8.912-4.858-.04-.064.003-.148.077-.162Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.142 13.442c1.207-.731 2.26-.437 2.893.033.259.192.389.288.465.288.076 0 .206-.096.465-.288.633-.47 1.686-.764 2.893-.033 1.584.96 1.942 4.125-1.71 6.795-.697.509-1.044.763-1.648.763-.604 0-.951-.254-1.647-.763-3.653-2.67-3.295-5.836-1.711-6.795ZM6 8c1.466-.613 3.61-1 6-1s4.534.387 6 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9c0 3.257-1.831 4.942-2.943 4.998a.093.093 0 0 1-.086-.048C2.157 12.497 2 10.788 2 9c0-3.314.895-6 2-6s2 2.686 2 6Zm12.06 1.02A6.53 6.53 0 0 1 18 9c0-3.314.895-6 2-6s2 2.686 2 6c0 .38 0 1.14-.052 1.52"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 19c-2.96-.22-6.26-1.96-8-5"/> </svg>
  );
};

export default Masklove1;
