import React from 'react';
import type { IconProps } from '../types';

const Sushi03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 9.5C5 10.88 7.015 12 9.5 12S14 10.88 14 9.5 11.985 7 9.5 7 5 8.12 5 9.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 16.647C14 17.947 11.985 19 9.5 19S5 17.947 5 16.647V9.5m9 0v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 9.5h-.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 18 20-7M2 14l3-1.35M22 5l-8 3.6"/> </svg>
  );
};

export default Sushi03;
