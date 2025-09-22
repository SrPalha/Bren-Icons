import React from 'react';
import type { IconProps } from '../types';

const Satellite: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 22-3-7-3 7h6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.192 13.335c1.293 1.293 1.94 1.94 1.786 2.938a2.5 2.5 0 0 1-.034.172c-.24.98-.9 1.254-2.216 1.8A9.928 9.928 0 0 1 4.756 5.271c.545-1.317.818-1.975 1.8-2.216.045-.01.125-.027.17-.034 1-.153 1.646.493 2.939 1.786l8.527 8.527Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.5 7.133 5.213-1.604-1.836 5"/> </svg>
  );
};

export default Satellite;
