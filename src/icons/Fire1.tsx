import React from 'react';
import type { IconProps } from '../types';

const Fire1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.856 22c12.222-3 5.378-15-2.933-20-.978 3.5-2.445 4.5-5.378 8-3.884 4.634-1.955 10 3.422 12-.815-1-2.917-3.1-1.467-6 .5-1 1.5-2 1-4 .978.5 3 1 3.5 3.5.815-1 1.66-3.1.878-5.5 6.122 4.5 3.622 9 .978 12Z"/> </svg>
  );
};

export default Fire1;
