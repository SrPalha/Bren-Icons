import React from 'react';
import type { IconProps } from '../types';

const Refrigerator: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6c0-1.886 0-2.828.586-3.414C6.172 2 7.114 2 9 2h6c1.886 0 2.828 0 3.414.586C19 3.172 19 4.114 19 6v14c0 .943 0 1.414-.293 1.707C18.414 22 17.943 22 17 22H7c-.943 0-1.414 0-1.707-.293C5 21.414 5 20.943 5 20V6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h.009M8 13h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h14"/> </svg>
  );
};

export default Refrigerator;
