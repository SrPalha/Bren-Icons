import React from 'react';
import type { IconProps } from '../types';

const Constellation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-16a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10.298-4.127-1.595 4.254m.418-5.443L5.88 7.316m5.872 6.669-.504 4.03m2.541-5.12 4.422 2.21m-.04 1.707-5.343 2.375"/> </svg>
  );
};

export default Constellation;
