import React from 'react';
import type { IconProps } from '../types';

const Trulli: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.672 10.547 3.808-4.7C9.557 3.282 10.596 2 12 2c1.404 0 2.443 1.282 4.52 3.847l3.808 4.7c.513.633.769.95.638 1.201-.13.252-.55.252-1.391.252H4.425c-.84 0-1.26 0-1.391-.252-.13-.252.125-.568.638-1.2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 8.508c3.328.899 4.821-3.277 7.58-.598C15 9.29 16.415 9.205 18 8.508"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 22v-4a2 2 0 0 1 4 0v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12v8c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-11c-.943 0-1.414 0-1.707-.293C4.5 21.414 4.5 20.943 4.5 20v-8"/> </svg>
  );
};

export default Trulli;
