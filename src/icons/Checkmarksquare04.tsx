import React from 'react';
import type { IconProps } from '../types';

const Checkmarksquare04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 2.5h-3c-4.478 0-6.718 0-8.109 1.391S2.5 7.521 2.5 12c0 4.478 0 6.718 1.391 8.109S7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.391C21.5 18.717 21.5 16.479 21.5 12v-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.5 10 3.5 3.5 9-10"/> </svg>
  );
};

export default Checkmarksquare04;
