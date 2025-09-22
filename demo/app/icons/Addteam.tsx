import React from 'react';
import type { IconProps } from '../types';

const Addteam: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.5 11a3.5 3.5 0 1 0 0-7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.143 20H3.857C2.831 20 2 19.233 2 18.286 2 15.919 4.079 14 6.643 14h3.714a4.88 4.88 0 0 1 2.786.857"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 14v6m3-3h-6"/> </svg>
  );
};

export default Addteam;
