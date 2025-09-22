import React from 'react';
import type { IconProps } from '../types';

const Calendarremove01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2v2M6 2v2m5.05 18c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.477 5.682 21.5 7.804 21.5 12M3 8h18m-6.5 7 3.5 3.5m0 0 3.5 3.5M18 18.5l3.5-3.5M18 18.5 14.5 22"/> </svg>
  );
};

export default Calendarremove01;
