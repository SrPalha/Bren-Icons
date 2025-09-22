import React from 'react';
import type { IconProps } from '../types';

const House05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 11h16v11H4V11Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 22v-3c0-.943 0-1.414-.293-1.707C13.914 17 13.443 17 12.5 17h-1c-.943 0-1.414 0-1.707.293-.293.293-.293.764-.293 1.707v3M2 9.723c0-.578.27-1.04.817-1.224l8.113-2.711C11.79 5.5 12 5.026 12 4.186c0-.757-.124-2.269 1.064-2.184.28.02.62.285 1.298.814l7.077 5.519c.4.311.561.682.561 1.2 0 .943-.396 1.465-1.315 1.465H3.147C2.41 11 2 10.456 2 9.723Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 15h1m9 0h-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 7.5V3"/> </svg>
  );
};

export default House05;
