import React from 'react';
import type { IconProps } from '../types';

const Sperm: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.89 14.11c2.235 2.233 5.299 2.792 8.092 0 2.793-2.794 4.045-8.092 2.023-10.115-2.023-2.022-7.321-.77-10.114 2.023-2.793 2.793-2.234 5.857 0 8.091Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 21c.413-.548 1.055-1.118 2.178-1.392.894-.219 1.342-.328 1.508-.442.335-.227.44-.41.459-.802.01-.195-.096-.495-.306-1.097s-.315-.902-.306-1.097c.02-.392.124-.575.458-.803.167-.113.614-.222 1.509-.44.799-.196 1.286-.548 1.5-.927"/> </svg>
  );
};

export default Sperm;
