import React from 'react';
import type { IconProps } from '../types';

const Bookopen02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.613 16.085C13.98 17.568 12.477 20.64 12 21.5V8c.415-.746 1.602-2.883 3.632-4.336.855-.612 1.282-.918 1.825-.64.543.28.543.896.543 2.128v8.84c0 .665 0 .998-.137 1.231-.136.234-.508.443-1.25.862Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7.806c-.687-.722-2.678-2.436-6.02-3.036-1.692-.305-2.538-.457-3.26.126C2 5.48 2 6.426 2 8.321v6.809c0 1.732 0 2.598.463 3.139.462.54 1.48.724 3.518 1.09 1.815.326 3.232.847 4.258 1.37 1.01.514 1.514.771 1.761.771.247 0 .752-.257 1.76-.771 1.027-.523 2.444-1.044 4.26-1.37 2.036-.366 3.055-.55 3.517-1.09.463-.541.463-1.407.463-3.14V8.322c0-1.894 0-2.841-.72-3.425C20.557 4.313 19 4.77 18 5.5"/> </svg>
  );
};

export default Bookopen02;
