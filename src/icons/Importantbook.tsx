import React from 'react';
import type { IconProps } from '../types';

const Importantbook: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 10c0-3.771 0-5.657 1.172-6.828C6.843 2 8.729 2 12.5 2H14c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-1.5c-3.771 0-5.657 0-6.828-1.172C4.5 19.657 4.5 17.771 4.5 14v-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.25 14.5h.009m0-2.208V9.5M18.25 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 6H2m2.5 6H2m2.5 6H2"/> </svg>
  );
};

export default Importantbook;
