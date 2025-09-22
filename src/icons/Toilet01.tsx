import React from 'react';
import type { IconProps } from '../types';

const Toilet01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11h9.135c1.465 0 2.198 0 2.64.735.442.736.182 1.204-.34 2.142A6.102 6.102 0 0 1 14.09 17a6.12 6.12 0 0 1-4.028-1.5M8 11V4c0-.943 0-1.414-.293-1.707C7.414 2 6.943 2 6 2c-.943 0-1.414 0-1.707.293C4 2.586 4 3.057 4 4v7c0 .943 0 1.414.293 1.707C4.586 13 5.057 13 6 13c.943 0 1.414 0 1.707-.293C8 12.414 8 11.943 8 11ZM7 7h3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 17c-1 1 0 4 2 5H4c1-1 2.7-4.2 1.5-9"/> </svg>
  );
};

export default Toilet01;
