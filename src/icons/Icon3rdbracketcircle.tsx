import React from 'react';
import type { IconProps } from '../types';

const Icon3rdbracketcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 16c.924 0 1.673-.512 1.673-1.143 0-1.22.014-1.723 1.082-2.453.327-.223.327-.585 0-.808-1.068-.73-1.082-1.232-1.082-2.453C15.673 8.512 14.924 8 14 8m-4 8c-.924 0-1.673-.512-1.673-1.143 0-1.22-.014-1.723-1.082-2.453-.327-.223-.327-.585 0-.808 1.068-.73 1.082-1.232 1.082-2.453C8.327 8.512 9.076 8 10 8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Icon3rdbracketcircle;
