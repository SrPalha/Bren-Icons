import React from 'react';
import type { IconProps } from '../types';

const Comet02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15 2-1.001 1.001M9 8l3-3m9.414 5.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.121 16.163.902-2.846a2.685 2.685 0 0 1 1.393-1.599l1.092-.53c.854-.415 1.893-.121 2.384.674l1.021 1.655c.253.408.379.612.54.718a.884.884 0 0 0 .771.092c.183-.063.356-.232.702-.568.816-.792 2.173-.662 2.812.27l.802 1.169a2.6 2.6 0 0 1 .355 2.208l-.235.797a2.683 2.683 0 0 1-1.409 1.65l-3.84 1.866a2.808 2.808 0 0 1-2.819-.215l-3.444-2.39a2.623 2.623 0 0 1-1.027-2.95Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m22 2-8 8"/> </svg>
  );
};

export default Comet02;
