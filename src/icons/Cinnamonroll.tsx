import React from 'react';
import type { IconProps } from '../types';

const Cinnamonroll: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 9c0 3.314-4.477 6-10 6S2 12.314 2 9s4.477-6 10-6 10 2.686 10 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 6.854c3-1.413 5 .863 5 1.928 0 3.17-10 3.005-10-.9C7 5.498 9 3 12 3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 9v6c0 3.314-4.477 6-10 6S2 18.314 2 15V9"/> </svg>
  );
};

export default Cinnamonroll;
