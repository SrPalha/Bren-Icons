import React from 'react';
import type { IconProps } from '../types';

const Videooff: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2.002 2 19.975 20m-5.125-5.132c-.13.938-.386 1.599-.892 2.107C14.936 20 13.288 20 9.992 20h-.999c-3.295 0-4.943 0-5.967-1.026C2.002 17.95 2.002 16.3 2.002 13v-2c0-3.3 0-4.95 1.024-5.975.342-.343.755-.571 1.275-.723"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.236 4h1.755c3.296 0 4.944 0 5.968 1.025C16.982 6.05 16.982 7.7 16.982 11v1.757m0-3.526 2.32-1.702c1.47-.988 2.147-.357 2.366.12.451 1.28.309 3.745.309 6.893-.107 2.013-.382 2.23-.663 2.452l-.003.002"/> </svg>
  );
};

export default Videooff;
