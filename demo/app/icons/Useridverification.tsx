import React from 'react';
import type { IconProps } from '../types';

const Useridverification: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.134 2.5c-2.666.06-4.223.315-5.287 1.375C2.915 4.803 2.604 6.108 2.5 8.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375.932-.928 1.243-2.233 1.347-4.325M9.134 21.5c-2.666-.06-4.223-.315-5.287-1.375-.932-.928-1.243-2.233-1.347-4.325"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5Z"/> </svg>
  );
};

export default Useridverification;
