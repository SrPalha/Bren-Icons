import React from 'react';
import type { IconProps } from '../types';

const Aibrain03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16.5a3 3 0 0 0 3 3 2.5 2.5 0 0 0 5 0 2.5 2.5 0 1 0 5 0 3 3 0 0 0 2.567-4.553 3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0-5 0 3 3 0 0 0-2.567 4.553 3.001 3.001 0 0 0 0 5.893A2.986 2.986 0 0 0 4 16.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.5 14.5 1.842-5.526a.694.694 0 0 1 1.316 0L12.5 14.5m3-6v6m-7-2h3"/> </svg>
  );
};

export default Aibrain03;
