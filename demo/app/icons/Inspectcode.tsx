import React from 'react';
import type { IconProps } from '../types';

const Inspectcode: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5 22 22"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.5 9.5.92.793c.387.333.58.5.58.707 0 .207-.193.374-.58.707l-.92.793m-7-3-.92.793c-.387.333-.58.5-.58.707 0 .207.193.374.58.707l.92.793m4.5-4-2 5"/> </svg>
  );
};

export default Inspectcode;
