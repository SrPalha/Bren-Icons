import React from 'react';
import type { IconProps } from '../types';

const Labor: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 22v-3c0-1.886 0-2.828-.586-3.414C18.828 15 17.886 15 16 15h-2l-2 2-2-2H8c-1.886 0-2.828 0-3.414.586C4 16.172 4 17.114 4 19v3m12-7v7m-8-7v7m7.5-13V7a3.5 3.5 0 1 0-7 0v2a3.5 3.5 0 1 0 7 0Zm-8-1.5h9M12 2v1.5"/> </svg>
  );
};

export default Labor;
