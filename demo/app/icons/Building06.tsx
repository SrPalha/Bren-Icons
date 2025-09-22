import React from 'react';
import type { IconProps } from '../types';

const Building06: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 2H6c-2.482 0-3 .518-3 3v17h12V5c0-2.482-.518-3-3-3Zm6 6h-3v14h6V11c0-2.482-.518-3-3-3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 6h2M8 9h2m-2 3h2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 22v-4c0-.943 0-1.414-.293-1.707C10.914 16 10.443 16 9.5 16h-1c-.943 0-1.414 0-1.707.293-.293.293-.293.764-.293 1.707v4"/> </svg>
  );
};

export default Building06;
