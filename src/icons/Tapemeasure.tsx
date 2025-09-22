import React from 'react';
import type { IconProps } from '../types';

const Tapemeasure: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5 9.979C5 11.095 6.79 12 9 12V9.979c0-.994 0-1.492-.397-1.795-.398-.303-.792-.19-1.58.037C5.815 8.57 5 9.226 5 9.98Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 8.5c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5S5.134 5 9 5s7 1.567 7 3.5Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 9v6.667C2 17.507 5.134 19 9 19h11c.943 0 1.414 0 1.707-.293C22 18.414 22 17.943 22 17v-3c0-.943 0-1.414-.293-1.707C21.414 12 20.943 12 20 12H9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 19v-2m-4 2v-2m-4 2v-2m-4 1.5v-2"/> </svg>
  );
};

export default Tapemeasure;
