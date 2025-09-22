import React from 'react';
import type { IconProps } from '../types';

const Chartlinedata03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 8.333C20.075 7.032 18.865 6 16.978 6 8.468 6 12.92 20.5 5 20.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/> </svg>
  );
};

export default Chartlinedata03;
