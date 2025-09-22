import React from 'react';
import type { IconProps } from '../types';

const Aismartwatch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.121 17.121C13.243 18 11.828 18 9 18c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12c0-2.828 0-4.243.879-5.121C4.757 6 6.172 6 9 6c2.828 0 4.243 0 5.121.879"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 6.75 18 9h-2m3.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75 10.5L18 15h-2m3.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.75-5.25H12m7.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m13 6-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a1.995 1.995 0 0 0-.165-.129C11.07 2 10.38 2 9 2s-2.069 0-2.585.361c-.057.04-.112.083-.165.129-.476.413-.643 1.082-.978 2.42L5 6m0 12 .272 1.09c.335 1.338.502 2.007.978 2.42.053.046.108.089.165.129C6.93 22 7.62 22 9 22s2.069 0 2.585-.361c.057-.04.112-.083.165-.129.476-.413.643-1.082.978-2.42L13 18"/> </svg>
  );
};

export default Aismartwatch;
