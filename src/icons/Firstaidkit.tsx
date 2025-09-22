import React from 'react';
import type { IconProps } from '../types';

const Firstaidkit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12.563c0-3.094 0-4.64 1.025-5.602C4.05 6 5.7 6 9 6h6c3.3 0 4.95 0 5.975.961C22 7.922 22 9.47 22 12.562v1.876c0 3.093 0 4.64-1.025 5.6C19.95 21 18.3 21 15 21H9c-3.3 0-4.95 0-5.975-.961C2 19.078 2 17.53 2 14.437v-1.874Zm7 .937h6m-3-3v6M17 6c0-2.482-.518-3-3-3h-4c-2.482 0-3 .518-3 3"/> </svg>
  );
};

export default Firstaidkit;
