import React from 'react';
import type { IconProps } from '../types';

const Manager: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 22v-5c0-1.886 0-2.828-.586-3.414C18.828 13 17.886 13 16 13l-4 9-4-9c-1.886 0-2.828 0-3.414.586C4 14.172 4 15.114 4 17v5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 15-.5 4 .5 1.5.5-1.5-.5-4Zm0 0-1-2h2l-1 2Zm3.5-8.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0Z"/> </svg>
  );
};

export default Manager;
