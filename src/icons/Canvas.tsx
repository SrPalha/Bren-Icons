import React from 'react';
import type { IconProps } from '../types';

const Canvas: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 8c0-2.828 0-4.243 1.004-5.121C6.008 2 7.624 2 10.857 2h2.286c3.232 0 4.849 0 5.853.879C20 3.757 20 5.172 20 8v9H4V8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 17h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.699 5.566c1.23-.176 3.268-.106 1.581 1.587-2.108 2.115-5.272 6.876-1.581 5.29 3.69-1.588 5.272-.53 3.69 1.057"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 17v4m-7 1 3-5m11 5-3-5"/> </svg>
  );
};

export default Canvas;
