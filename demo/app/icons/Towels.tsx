import React from 'react';
import type { IconProps } from '../types';

const Towels: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 5H15c1.886 0 2.828 0 3.414.586C19 6.172 19 7.114 19 9v3c0 1.886 0 2.828-.586 3.414C17.828 16 16.886 16 15 16h-3c-1.886 0-2.828 0-3.414-.586C8 14.828 8 13.886 8 12V8M6.5 5A1.5 1.5 0 0 0 5 6.5V8h3M6.5 5A1.5 1.5 0 0 1 8 6.5V8m9 8c0 1.886 0 2.828-.586 3.414C15.828 20 14.886 20 13 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-5m17-7v1c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 8 19.932 8 19 8M2 4v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 8 4.068 8 5 8"/> </svg>
  );
};

export default Towels;
