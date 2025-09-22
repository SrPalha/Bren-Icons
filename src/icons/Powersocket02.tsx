import React from 'react';
import type { IconProps } from '../types';

const Powersocket02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.23 0-6.345 1.198-7.747.17-.2.356-.385.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198c.2.17.385.356.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747c-.17.2-.356.385-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198a4.93 4.93 0 0 1-.555-.555C2.5 18.345 2.5 16.23 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 9H9c-1.414 0-2.121 0-2.56.44C6 9.878 6 10.585 6 12c0 1.414 0 2.121.44 2.56C6.878 15 7.585 15 9 15h6c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56 0-1.414 0-2.121-.44-2.56C17.122 9 16.415 9 15 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.491 12h.01M9.5 12h.009"/> </svg>
  );
};

export default Powersocket02;
