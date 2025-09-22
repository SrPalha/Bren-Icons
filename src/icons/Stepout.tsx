import React from 'react';
import type { IconProps } from '../types';

const Stepout: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 10 1.84-1.586C20.613 7.748 21 7.414 21 7c0-.414-.387-.748-1.16-1.414L18 4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18v-3c0-3.771 0-5.657 1.172-6.828C14.343 7 16.229 7 20 7h1M3 21h6m6 0h6"/> </svg>
  );
};

export default Stepout;
