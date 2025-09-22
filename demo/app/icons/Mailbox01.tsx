import React from 'react';
import type { IconProps } from '../types';

const Mailbox01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 9h2m9-1V4a2 2 0 0 1 2-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.5 18v4m5-16.841C16.535 5 15.26 5 13.375 5h-2.75c-2.918 0-4.377 0-5.482.59A5 5 0 0 0 3.09 7.643c-.59 1.105-.59 2.564-.59 5.482 0 1.751 0 2.627.354 3.29a3 3 0 0 0 1.232 1.23C4.749 18 5.624 18 7.375 18h9.25c1.751 0 2.627 0 3.29-.354a3 3 0 0 0 1.23-1.232c.355-.663.355-1.538.355-3.289 0-2.918 0-4.377-.59-5.482a5 5 0 0 0-.621-.906"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.5 18v-7c0-.929 0-1.394-.061-1.782a5 5 0 0 0-4.156-4.156 3.735 3.735 0 0 0-.26-.032"/> </svg>
  );
};

export default Mailbox01;
