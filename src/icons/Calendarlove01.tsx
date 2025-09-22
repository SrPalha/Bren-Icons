import React from 'react';
import type { IconProps } from '../types';

const Calendarlove01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.142 14.442c1.207-.731 2.26-.437 2.893.033.259.192.389.288.465.288.076 0 .206-.096.465-.288.633-.47 1.686-.764 2.893-.033 1.584.96 1.942 4.125-1.71 6.795-.697.509-1.044.763-1.648.763-.604 0-.951-.254-1.647-.763-3.653-2.67-3.295-5.836-1.711-6.795Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8h18m-3-6v2M6 2v2m5.05 18c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.477 5.682 21.5 7.804 21.5 12"/> </svg>
  );
};

export default Calendarlove01;
