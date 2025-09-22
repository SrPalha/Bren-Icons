import React from 'react';
import type { IconProps } from '../types';

const Diploma: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 17.838c1.03-.151 1.763-.444 2.328-1.01C22 15.657 22 13.771 22 10c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10c0 3.771 0 5.657 1.172 6.828.808.809 1.956 1.06 3.828 1.137"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7H7"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 14.5c0 4.066 1.722 6.37 2.5 7.5l1.5-3 1.75 1L17 21c-.735-.711-1.494-2.953-1.494-2.953"/> </svg>
  );
};

export default Diploma;
