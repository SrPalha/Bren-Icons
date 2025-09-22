import React from 'react';
import type { IconProps } from '../types';

const Bubblechatsearch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12.995c-.724 4.606-4.98 8.138-9.995 8.138-.65 0-1.297-.06-1.936-.18-.459-.085-.689-.129-.849-.104-.16.024-.387.145-.842.387a6.502 6.502 0 0 1-4.226.657 5.296 5.296 0 0 0 1.087-2.35c.1-.53-.147-1.045-.519-1.422C3.034 16.408 2 14.1 2 11.56 2 6.435 6.21 2.25 11.5 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.017 8.023 22 10m-.947-4.473a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01m3.986 0H16m-8 0h.009"/> </svg>
  );
};

export default Bubblechatsearch;
