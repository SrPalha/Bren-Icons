import React from 'react';
import type { IconProps } from '../types';

const Securityblock: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 5s-1.173.204-1.363.415c-.19.21-.245.519-.356 1.135-1.19 6.596 1.41 12.694 7.61 15.068.665.255.998.382 1.61.382.613 0 .946-.127 1.612-.382 2.01-.77 3.64-1.675 4.887-3.118M7.5 3.42C8.825 2.697 10.229 2 11.998 2c3.008 0 4.96 2.014 7.268 2.748.938.298 1.407.447 1.596.657.19.21.246.518.357 1.133.623 3.444.208 6.752-1.219 9.462M2 2l20 20"/> </svg>
  );
};

export default Securityblock;
