import React from 'react';
import type { IconProps } from '../types';

const Watch01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m16 6-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a1.995 1.995 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361c-.057.04-.112.083-.165.129-.476.413-.643 1.082-.978 2.42L8 6m0 12 .272 1.09c.335 1.338.502 2.007.978 2.42.053.046.108.089.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361c.057-.04.112-.083.165-.129.476-.413.643-1.082.978-2.42L16 18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v2.005L13 13"/> </svg>
  );
};

export default Watch01;
