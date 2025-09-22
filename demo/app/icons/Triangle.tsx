import React from 'react';
import type { IconProps } from '../types';

const Triangle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5.593 9.225c2.246-3.602 3.368-5.403 4.84-5.945a4.527 4.527 0 0 1 3.134 0c1.472.542 2.594 2.343 4.84 5.945 2.527 4.053 3.79 6.08 3.568 7.753a4.659 4.659 0 0 1-1.599 2.938C19.1 21 16.733 21 12 21s-7.1 0-8.376-1.084a4.659 4.659 0 0 1-1.599-2.938c-.222-1.673 1.041-3.7 3.568-7.753Z"/> </svg>
  );
};

export default Triangle;
