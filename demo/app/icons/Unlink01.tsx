import React from 'react';
import type { IconProps } from '../types';

const Unlink01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m12.143 10.691.207-.207a5.067 5.067 0 1 1 7.166 7.166l-2.866 2.866a5.067 5.067 0 1 1-7.166-7.166l.464-.464"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m20.052 11.114.464-.464a5.067 5.067 0 1 0-7.166-7.166L10.484 6.35a5.067 5.067 0 1 0 7.166 7.166l.207-.207"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 4 6 6M2 8l3 1m-2 4.5L5 12"/> </svg>
  );
};

export default Unlink01;
