import React from 'react';
import type { IconProps } from '../types';

const Jar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.005 2.076V16c0 2.828 0 4.243.88 5.121.88.879 2.296.879 5.13.879 2.832 0 4.248 0 5.129-.879.88-.878.88-2.293.88-5.121V7.25c0-.955.182-1.493.75-2.25.444-.59 1.644-1.743 1.077-2.566C20.552 2 19.792 2 18.273 2h-8.264C7.177 2 5.76 2 4.88 2.879 4 3.757 4 5.172 4 8v2m15-2h-3m3 3.333h-3m3 3.334h-3M18.5 18H16"/> </svg>
  );
};

export default Jar;
