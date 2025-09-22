import React from 'react';
import type { IconProps } from '../types';

const Filtermailsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 11.5c0-4.478 0-6.718 1.391-8.109S7.021 2 11.5 2c4.478 0 6.718 0 8.109 1.391S21 7.021 21 11.5c0 4.478 0 6.718-1.391 8.109C18.217 21 15.979 21 11.5 21c-4.478 0-6.718 0-8.109-1.391C2 18.217 2 15.979 2 11.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 11.5h6m-5 3.5h4m-6-7h8"/> </svg>
  );
};

export default Filtermailsquare;
