import React from 'react';
import type { IconProps } from '../types';

const Calendarcheckin01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2v2M6 2v2m5.05 18c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354 1.179 1.274 1.248 3.28 1.252 7.146V13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17.5h8m-8 0c0 .7 1.994 2.009 2.5 2.5M13 17.5c0-.7 1.994-2.008 2.5-2.5M3 8h18"/> </svg>
  );
};

export default Calendarcheckin01;
