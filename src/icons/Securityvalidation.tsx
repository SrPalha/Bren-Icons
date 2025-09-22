import React from 'react';
import type { IconProps } from '../types';

const Securityvalidation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66-.19.21-.245.519-.356 1.135-1.19 6.596 1.41 12.694 7.61 15.068.665.255.998.382 1.61.382.613 0 .946-.128 1.612-.383 6.199-2.373 8.796-8.471 7.606-15.067-.111-.616-.167-.925-.357-1.136-.19-.21-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 12.5s.5 0 1 1c0 0 1.588-2.5 3-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/> </svg>
  );
};

export default Securityvalidation;
