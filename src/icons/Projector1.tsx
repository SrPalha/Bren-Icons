import React from 'react';
import type { IconProps } from '../types';

const Projector1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.5 10h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C2 11.688 2 12.626 2 14.5c0 1.875 0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C3.688 19 4.625 19 6.5 19h11c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 17.311 22 16.375 22 14.5c0-1.875 0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553c-.453-.328-1.038-.43-1.97-.463"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 13.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.5 19 5 22m12.5-3 1.5 3M12.5 5l-1-1m8 0-1 1m-3-1V2"/> </svg>
  );
};

export default Projector1;
