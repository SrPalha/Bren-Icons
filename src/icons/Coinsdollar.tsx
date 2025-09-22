import React from 'react';
import type { IconProps } from '../types';

const Coinsdollar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.771 8.205c-.216-.912-1.316-1.735-2.637-1.12-1.321.616-1.531 2.598.467 2.808.903.095 1.492-.11 2.03.471.54.581.64 2.198-.738 2.634-1.378.435-2.742-.245-2.891-1.212m1.984-5.782v.87m0 6.258v.872"/> </svg>
  );
};

export default Coinsdollar;
