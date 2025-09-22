import React from 'react';
import type { IconProps } from '../types';

const Bordervertical: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.3 2.751c-1.04.194-1.804.536-2.409 1.14-.604.605-.946 1.37-1.14 2.409M17.7 2.751c1.04.194 1.804.536 2.409 1.14.604.605.946 1.37 1.14 2.409M13.9 2.505C13.316 2.5 12.684 2.5 12 2.5c-.684 0-1.316 0-1.9.005M21.495 10.1c.005.584.005 1.216.005 1.9 0 .684 0 1.316-.005 1.9m-18.99-3.8C2.5 10.684 2.5 11.316 2.5 12c0 .684 0 1.316.005 1.9m.246 3.8c.194 1.04.536 1.804 1.14 2.409.605.604 1.37.946 2.409 1.14M21.249 17.7c-.194 1.04-.536 1.804-1.14 2.409-.605.604-1.37.946-2.409 1.14m-3.8.246c-.584.005-1.216.005-1.9.005-.684 0-1.316 0-1.9-.005M9.15 12h5.7m4.75 0h1.9m-19 0h1.9M12 2.5v19"/> </svg>
  );
};

export default Bordervertical;
