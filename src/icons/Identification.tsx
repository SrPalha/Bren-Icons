import React from 'react';
import type { IconProps } from '../types';

const Identification: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.135 2.5c-2.666.06-4.223.315-5.287 1.375C2.916 4.803 2.605 6.108 2.5 8.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375.932-.928 1.243-2.233 1.347-4.325M9.135 21.5c-2.666-.06-4.223-.315-5.287-1.375-.932-.928-1.243-2.233-1.347-4.325"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 17c1.838-2.595 6.119-2.737 8 0m-1.5-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/> </svg>
  );
};

export default Identification;
