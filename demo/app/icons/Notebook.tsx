import React from 'react';
import type { IconProps } from '../types';

const Notebook: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 14.5h4m-4-5h8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172C21.5 4.343 21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828C19.157 22 17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6H2.5M5 12H2.5M5 18H2.5"/> </svg>
  );
};

export default Notebook;
