import React from 'react';
import type { IconProps } from '../types';

const Linkforward: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.192 9.441 17.227 7.47c-1.417-1.421-1.972-2.185-2.738-1.915-.957.337-.642 2.463-.642 3.18-1.486 0-3.032-.131-4.497.144C4.513 9.787 3 13.715 3 18c1.37-.97 2.737-2.003 4.382-2.452 2.054-.562 4.348-.294 6.465-.294 0 .718-.314 2.844.642 3.181.868.306 1.321-.494 2.738-1.915l1.965-1.972C20.397 13.338 21 12.733 21 11.995c0-.74-.603-1.344-1.808-2.554Z"/> </svg>
  );
};

export default Linkforward;
