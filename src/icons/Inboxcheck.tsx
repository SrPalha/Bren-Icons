import React from 'react';
import type { IconProps } from '../types';

const Inboxcheck: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.982h-4.926c-.842 0-1.503.704-1.875 1.448-.403.808-1.21 1.552-2.699 1.552-1.489 0-2.296-.744-2.7-1.552-.37-.744-1.032-1.448-1.874-1.448H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.66 5.975s.377.116.9.884c0 0 .768-1.658 1.833-2.234m1.624 7.867c0 4.482 0 6.723-1.393 8.116C18.232 22 15.991 22 11.508 22c-4.482 0-6.723 0-8.116-1.392C2 19.215 2 16.974 2 12.492c0-4.483 0-6.724 1.392-8.116 1.393-1.393 3.634-1.393 8.116-1.393"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 5.983a3.983 3.983 0 1 1-7.966 0 3.983 3.983 0 0 1 7.966 0Z"/> </svg>
  );
};

export default Inboxcheck;
