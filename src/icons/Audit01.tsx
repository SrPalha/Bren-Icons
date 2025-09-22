import React from 'react';
import type { IconProps } from '../types';

const Audit01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 10.5V10c0-3.771 0-5.657-1.172-6.828C16.657 2 14.771 2 11 2 7.229 2 5.343 2 4.172 3.172 3 4.343 3 6.229 3 10v6c0 1.864 0 2.796.304 3.53a4 4 0 0 0 2.165 2.165C6.204 22 7.136 22 9 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 7h8m-8 4h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.283 19.003c-.06-.888-.165-1.838-.601-2.912-.373-.916-.269-3.072 1.818-3.072s2.166 2.156 1.794 3.072c-.436 1.074-.518 2.024-.576 2.912M21 22h-9v-1.246c0-.446.266-.839.653-.961l2.255-.716c.16-.051.327-.077.494-.077h2.196c.167 0 .334.026.494.077l2.255.716c.387.122.653.515.653.961V22Z"/> </svg>
  );
};

export default Audit01;
