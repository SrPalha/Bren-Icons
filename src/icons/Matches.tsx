import React from 'react';
import type { IconProps } from '../types';

const Matches: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 8H9c-1.886 0-2.828 0-3.414.586C5 9.172 5 10.114 5 12v6c0 1.886 0 2.828.586 3.414C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586C19 20.828 19 19.886 19 18v-6c0-1.886 0-2.828-.586-3.414C17.828 8 16.886 8 15 8Zm3 0V6c0-1.886 0-2.828-.586-3.414C16.828 2 15.886 2 14 2h-4c-1.886 0-2.828 0-3.414.586C6 3.172 6 4.114 6 6v2m6 0V5M9 8V5m6 3V5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12.154 19C13.726 19 15 17.746 15 16.2c0-2.295-2.44-2.8-2.44-5.2-1.828 1-1.56 4-1.56 4s-1.69 0-1.69-1.5c-.948 2.5.357 5.5 2.844 5.5Z"/> </svg>
  );
};

export default Matches;
