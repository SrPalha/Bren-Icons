import React from 'react';
import type { IconProps } from '../types';

const Developer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052.52-2.56.94-.464c.505-.248.756-.373.81-.6.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506-.051-.132-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2 6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8.13 8.13 0 0 0 2.027.987"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 9 .92.793c.387.333.58.5.58.707 0 .207-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707 0 .207.193.374.58.707L7 12m4.5-4-2 5"/> </svg>
  );
};

export default Developer;
