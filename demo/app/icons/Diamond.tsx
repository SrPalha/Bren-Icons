import React from 'react';
import type { IconProps } from '../types';

const Diamond: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5.92 5.92c2.238-2.237 3.357-3.355 4.666-3.724a5.21 5.21 0 0 1 2.828 0c1.309.369 2.428 1.487 4.665 3.725 2.238 2.237 3.356 3.356 3.725 4.665a5.21 5.21 0 0 1 0 2.828c-.369 1.309-1.487 2.428-3.725 4.665-2.237 2.238-3.356 3.356-4.665 3.725a5.21 5.21 0 0 1-2.828 0c-1.309-.369-2.428-1.487-4.665-3.725-2.238-2.237-3.356-3.356-3.725-4.665a5.21 5.21 0 0 1 0-2.828C2.565 9.277 3.683 8.158 5.92 5.92Z"/> </svg>
  );
};

export default Diamond;
