import React from 'react';
import type { IconProps } from '../types';

const Hospital02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 4.5V6m0 0v1.5M12 6h1.5M12 6h-1.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.586 2.586C8 3.172 8 4.114 8 6c0 1.886 0 2.828.586 3.414C9.172 10 10.114 10 12 10c1.886 0 2.828 0 3.414-.586C16 8.828 16 7.886 16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586ZM4 22V11.97c0-3.309 0-4.964 1.025-5.992C5.677 5.325 6.581 5.087 8 5m12 17V11.97c0-3.309 0-4.964-1.025-5.992C18.323 5.325 17.419 5.087 16 5M3 22h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.5 22v-2.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 17 11.065 17 12 17s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75V22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.009 13H8m4 0h-.009m4.01 0h-.009"/> </svg>
  );
};

export default Hospital02;
