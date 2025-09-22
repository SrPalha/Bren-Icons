import React from 'react';
import type { IconProps } from '../types';

const Bread01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.194 14.077c-1.248 1.231-1.35 3.54-1.057 5.674.265 1.935 2.442 2.848 4.075 1.825 2.987-1.87 6.106-4.334 9.095-7.281 3.07-3.028 4.753-5.334 6.237-7.928.9-1.572.478-3.67-1.344-4.135-1.995-.509-4.58-.3-6.862 1.845m-10.144 10c-.834-3.74 2.096-8.145 8.972-4.283m-8.972 4.283c.623.013 2.024.295 3.36 1.247m6.784-11.247C8.823 3.005 6.909 6.255 6.846 8.195m6.492-4.118c.966.23 2.052.658 3.264 1.339"/> </svg>
  );
};

export default Bread01;
