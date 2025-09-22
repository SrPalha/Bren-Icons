import React from 'react';
import type { IconProps } from '../types';

const Candelier02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 3h20M12 3v13m7.5-13v8m-15-8v8m0 0c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0C7.205 13.512 6.215 11 4.5 11Zm7.5 5c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0C14.705 18.512 13.715 16 12 16Zm7.5-5c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0 .241-1.478-.749-3.99-2.464-3.99Z"/> </svg>
  );
};

export default Candelier02;
