import React from 'react';
import type { IconProps } from '../types';

const Schoolbell01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 7a8.045 8.045 0 0 0-7.458-5C6.101 2 2.5 5.582 2.5 10s3.6 8 8.042 8c1.678 0 3.235-.51 4.524-1.385"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 13c0 5.1-4.393 8.595-10 8.967-.456.03-.683.045-.842-.103-.158-.148-.158-.387-.158-.864v-3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Schoolbell01;
