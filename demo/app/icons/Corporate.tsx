import React from 'react';
import type { IconProps } from '../types';

const Corporate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22V6c0-1.886 0-2.828-.586-3.414C10.828 2 9.886 2 8 2H6c-1.886 0-2.828 0-3.414.586C2 3.172 2 4.114 2 6v12c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h6Zm0 0h6c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414C20.828 8 19.886 8 18 8h-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 16h-3m3-4h-3m-7 2h-3m3-4h-3m3-4h-3"/> </svg>
  );
};

export default Corporate;
