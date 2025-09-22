import React from 'react';
import type { IconProps } from '../types';

const Desk: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 8h18v4c0 2.357 0 3.536-.732 4.268C19.535 17 18.357 17 16 17H8c-2.357 0-3.536 0-4.268-.732C3 15.536 3 14.357 3 12V8Zm4-2c0-1.886 0-2.828.586-3.414C8.172 2 9.114 2 11 2h2c1.886 0 2.828 0 3.414.586C17 3.172 17 4.114 17 6v2H7V6ZM5 17v5m14-5v5M8 17v3m8-3v3M2 8h1.818m16.364 0H22"/> </svg>
  );
};

export default Desk;
