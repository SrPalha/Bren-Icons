import React from 'react';
import type { IconProps } from '../types';

const Home05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20 8.5v5c0 3.771 0 5.657-1.172 6.828C17.657 21.5 15.771 21.5 12 21.5c-3.771 0-5.657 0-6.828-1.172C4 19.157 4 17.271 4 13.5v-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m22 10.5-4.343-4.165C14.99 3.778 13.657 2.5 12 2.5S9.01 3.778 6.343 6.335L2 10.5"/> </svg>
  );
};

export default Home05;
