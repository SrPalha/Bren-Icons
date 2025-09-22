import React from 'react';
import type { IconProps } from '../types';

const Twintower: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 19 3-4 3 4m-6-5h6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 22v-8c0-.943 0-1.414.293-1.707C2.586 12 3.057 12 4 12h3c.943 0 1.414 0 1.707.293C9 12.586 9 13.057 9 14v8M3 12v-2c0-.943 0-1.414.293-1.707C3.586 8 4.057 8 5 8h1c.943 0 1.414 0 1.707.293C8 8.586 8 9.057 8 10v2M4 8V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 4 5.034 4 5.5 4s.699 0 .883.076a1 1 0 0 1 .54.541C7 4.801 7 5.034 7 5.5V8m8 14v-8c0-.943 0-1.414.293-1.707C15.586 12 16.057 12 17 12h3c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 22h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.5 4V2M16 12v-2c0-.943 0-1.414.293-1.707C16.586 8 17.057 8 18 8h1c.943 0 1.414 0 1.707.293C21 8.586 21 9.057 21 10v2m-4-4V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C17.801 4 18.034 4 18.5 4s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V8m-1.5-4V2m-13 20v-2m13 2v-2"/> </svg>
  );
};

export default Twintower;
