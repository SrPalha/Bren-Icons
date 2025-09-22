import React from 'react';
import type { IconProps } from '../types';

const Notificationsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.5 3h-1C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391C21 19.217 21 16.979 21 12.5v-1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11h4m-4 5h8"/> </svg>
  );
};

export default Notificationsquare;
