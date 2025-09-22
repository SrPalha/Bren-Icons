import React from 'react';
import type { IconProps } from '../types';

const Grapes: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.83 18a3 3 0 1 1-5.659 0"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.236 13a3 3 0 1 1-4.472 0"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.236 13a3 3 0 1 1-4.472 0"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-6 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-6 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7c0-1.667.8-5 4-5"/> </svg>
  );
};

export default Grapes;
