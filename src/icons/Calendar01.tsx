import React from 'react';
import type { IconProps } from '../types';

const Calendar01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2v2M6 2v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 17v-3.653c0-.191-.137-.347-.305-.347H9m4.63 4 1.354-3.65c.063-.171-.071-.35-.263-.35H13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513ZM6 8h12"/> </svg>
  );
};

export default Calendar01;
