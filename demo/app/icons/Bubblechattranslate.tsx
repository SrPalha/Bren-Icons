import React from 'react';
import type { IconProps } from '../types';

const Bubblechattranslate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M22 11.567c0 5.283-4.478 9.566-10 9.566a10.46 10.46 0 0 1-1.935-.178c-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.478 2 12 2s10 4.284 10 9.567Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8.241h4m0 0h2.571m-2.571 0V7m4 1.241h-1.429m0 0c-.469 1.698-1.45 3.303-2.571 4.713m0 0c-.928 1.168-1.951 2.202-2.857 3.046M12 12.954c-.571-.678-1.371-1.776-1.6-2.272m1.6 2.272 1.714 1.805"/> </svg>
  );
};

export default Bubblechattranslate;
