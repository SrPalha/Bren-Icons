import React from 'react';
import type { IconProps } from '../types';

const Mouse23: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.74 17.089c.19 2.391 2.084 4.422 4.525 4.723.898.11 1.81.188 2.735.188.925 0 1.837-.078 2.735-.188 2.44-.301 4.334-2.332 4.524-4.723.132-1.657.241-3.357.241-5.089 0-1.732-.11-3.432-.24-5.089-.19-2.391-2.084-4.422-4.525-4.723A22.47 22.47 0 0 0 12 2c-.925 0-1.837.078-2.735.188-2.44.3-4.335 2.332-4.524 4.723C4.609 8.568 4.5 10.268 4.5 12c0 1.732.109 3.432.24 5.089Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v3"/> </svg>
  );
};

export default Mouse23;
