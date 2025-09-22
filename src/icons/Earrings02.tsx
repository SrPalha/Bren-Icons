import React from 'react';
import type { IconProps } from '../types';

const Earrings02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 14.006c3.6 0 2.4 4 6 4m4-4c3.6 0 2.4 4 6 4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 21c1.657 0 3-2.461 3-5.498 0-3.037-1.343-5.498-3-5.498s-3 2.462-3 5.498C4 18.539 5.343 21 7 21Zm10 0c1.657 0 3-2.461 3-5.498 0-3.037-1.343-5.498-3-5.498s-3 2.462-3 5.498C14 18.539 15.343 21 17 21Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.955 7.235c-.35-.202-.894-.522-1.022-2.447C8.82 3.081 7.269 2.91 6.676 3.03c-.557.114-1.6.702-1.668 1.925-.046.82.462 1.606 1.665 2.084.202.08.345.271.345.49v2.233m12.919-2.527c-.35-.202-.895-.522-1.022-2.447-.113-1.707-1.664-1.878-2.257-1.758-.557.114-1.6.702-1.668 1.925-.046.82.462 1.606 1.665 2.084.202.08.345.271.345.49v2.233"/> </svg>
  );
};

export default Earrings02;
