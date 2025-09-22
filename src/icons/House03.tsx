import React from 'react';
import type { IconProps } from '../types';

const House03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 10 5-6m0 0 5.414 5.414c.29.29.434.434.617.51.184.076.389.076.797.076H22l-3.8-4.56c-.59-.708-.885-1.062-1.288-1.251C16.508 4 16.048 4 15.127 4H7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 8v12H3V8.857M11 20h10V9M4 7.5V4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.008 12h-.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20v-4m8-2h2"/> </svg>
  );
};

export default House03;
