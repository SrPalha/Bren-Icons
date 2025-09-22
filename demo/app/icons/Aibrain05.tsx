import React from 'react';
import type { IconProps } from '../types';

const Aibrain05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 4.5a3 3 0 0 0-2.567 4.553 3.001 3.001 0 0 0 0 5.893M7.5 4.5a2.5 2.5 0 0 1 5 0V6m-5-1.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 0 7.5 19.5a2.5 2.5 0 0 0 5 0V18m-7.567-3.053A3.01 3.01 0 0 1 6.5 13.67M17.5 9h-2c-.943 0-1.414 0-1.707.293-.293.293-.293.764-.293 1.707v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-2c0-.943 0-1.414-.293-1.707C18.914 9 18.443 9 17.5 9ZM15 15v2m3-2v2M15 7v2m3-2v2m-4.5 1.5h-2m2 3h-2m10-3h-2m2 3h-2"/> </svg>
  );
};

export default Aibrain05;
