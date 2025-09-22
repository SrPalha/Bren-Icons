import React from 'react';
import type { IconProps } from '../types';

const Garage: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.781 3.098-4.11 2.796c-1.307.89-1.961 1.335-2.316 2.011C3 8.582 3 9.385 3 10.99v6.929c0 1.924 0 2.886.586 3.484C4.172 22 5.114 22 7 22h10c1.886 0 2.828 0 3.414-.598.586-.598.586-1.56.586-3.484v-6.93c0-1.603 0-2.406-.355-3.083-.355-.676-1.009-1.121-2.317-2.011l-4.11-2.796C13.144 2.366 12.607 2 12 2c-.606 0-1.143.366-2.219 1.098Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 22v-7c0-1.886 0-2.828.586-3.414C8.172 11 9.114 11 11 11h2c1.886 0 2.828 0 3.414.586C17 12.172 17 13.114 17 15v7M7 14h10M7 18h10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.008 7h-.009"/> </svg>
  );
};

export default Garage;
