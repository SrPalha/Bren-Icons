import React from 'react';
import type { IconProps } from '../types';

const Organicfood: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9.255C7.606 7.958 5.08 5.715 3 2m8.616 2.419C9.58 3.084 7.097 3.642 6.069 5.666c-1.028 2.024-.211 4.747 1.824 6.083 1.842 1.209 5.874 2.459 9.107-1.004-3.03-1.29-3.35-4.99-5.384-6.326Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 11c-.64.47-1 1.005-1 1.572C3 14.465 7.03 16 12 16s9-1.535 9-3.428c0-.567-.36-1.101-1-1.572"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 13c0 3.577-2.506 6.715-5.205 8.482-.555.364-1.215.518-1.878.518h-3.834c-.663 0-1.323-.154-1.878-.518C5.506 19.715 3 16.577 3 13"/> </svg>
  );
};

export default Organicfood;
