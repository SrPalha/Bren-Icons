import React from 'react';
import type { IconProps } from '../types';

const Bread03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 11c0-2.761-1.899-5-4.241-5C9.126 6 7.5 7 7 8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 11c0-2.21-1.518-4-3.391-4A2.98 2.98 0 0 0 14 7.478M22 12c0 3.314-4.477 6-10 6S2 15.314 2 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.89 11C8.5 9.275 7.13 8 5.5 8 3.567 8 2 9.79 2 12c0 1.657 4.477 3 10 3s10-1.343 10-3c0-.995-1.55-2.978-3.469-3"/> </svg>
  );
};

export default Bread03;
