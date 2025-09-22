import React from 'react';
import type { IconProps } from '../types';

const Shaka2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.712 11.671 15.639 13.5c0-1.39 0-2.085-.201-2.613a2.94 2.94 0 0 0-2.061-1.828c-.538-.127-1.205-.023-2.54.183L6.9 10V4.75C6.9 3.784 6.14 3 5.2 3c-.939 0-1.7.784-1.7 1.75v8.43c0 2.63 0 3.946.483 4.963a5 5 0 0 0 2.374 2.374C7.374 21 8.689 21 11.32 21c1.471 0 2.206 0 2.868-.256.204-.08.401-.176.59-.29.61-.367 1.074-.954 2.001-2.13l3.343-4.236a1.78 1.78 0 0 0 .008-2.183 1.657 1.657 0 0 0-2.418-.234Z"/> </svg>
  );
};

export default Shaka2;
