import React from 'react';
import type { IconProps } from '../types';

const Contact01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 2H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h9.5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.59 13.74c-.629.422-2.277 1.282-1.273 2.358.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902 1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0ZM15 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6H2.5M5 12H2.5M5 18H2.5"/> </svg>
  );
};

export default Contact01;
