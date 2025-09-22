import React from 'react';
import type { IconProps } from '../types';

const Speaker: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 13.5v-3c0-3.759 0-5.638-1.053-6.893a4.5 4.5 0 0 0-.555-.554C17.638 2 15.76 2 12 2 8.241 2 6.362 2 5.107 3.053a4.5 4.5 0 0 0-.554.554C3.5 4.862 3.5 6.741 3.5 10.5v3c0 3.759 0 5.638 1.053 6.892.168.201.354.387.554.555C6.362 22 8.241 22 12 22s5.638 0 6.892-1.053a4.5 4.5 0 0 0 .555-.555C20.5 19.138 20.5 17.26 20.5 13.5Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 15a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-2-8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/> </svg>
  );
};

export default Speaker;
